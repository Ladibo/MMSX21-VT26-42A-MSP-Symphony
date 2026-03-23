import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { State } from '@src/app/app-reducer';
import { Band, BandType } from '@data/metadata/metadata.interfaces';
import { MetadataActions, MetadataSelectors } from '@data/metadata';
import { LayerStyleService } from '../map/layers/layer-style.service';
import { ResultLayerService, ResultEntry } from '../map/layers/result-layer.service';
import { CalculationService } from '@data/calculation/calculation.service'; // ADDED

export interface BandLayerItem {
  kind: 'band';
  band: Band;
  type: BandType;
}

export interface ResultLayerItem {
  kind: 'result';
  entry: ResultEntry;
}

export type LayerItem = BandLayerItem | ResultLayerItem;

@Component({
  selector: 'app-layer-manager',
  templateUrl: './layer-manager.component.html',
  styleUrls: ['./layer-manager.component.scss']
})
export class LayerManagerComponent implements OnInit, OnDestroy {
  layers: LayerItem[] = [];
  private sub?: Subscription;

  constructor(
    private store: Store<State>,
    public layerStyleService: LayerStyleService,
    private resultLayerService: ResultLayerService,
    private calcService: CalculationService // ADDED
  ) {}

  ngOnInit() {
    this.sub = combineLatest([
      this.store.select(MetadataSelectors.selectVisibleBands),
      this.resultLayerService.results$
    ]).subscribe(([components, results]) => {
      const bands: BandLayerItem[] = [
        ...components.ecoComponent.map(b => ({ kind: 'band' as const, band: b, type: 'ECOSYSTEM' as BandType })),
        ...components.pressureComponent.map(b => ({ kind: 'band' as const, band: b, type: 'PRESSURE' as BandType }))
      ];
      const resultItems: ResultLayerItem[] = results.map(r => ({ kind: 'result' as const, entry: r }));
      this.layers = [...bands, ...resultItems];
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  getLayerName(item: LayerItem): string {
    return item.kind === 'band' ? item.band.title : item.entry.name;
  }

  getLayerOpacity(item: LayerItem): number {
    return item.kind === 'band'
      ? this.layerStyleService.getOpacity(item.type, item.band.bandNumber) * 100
      : this.layerStyleService.getResultOpacity(item.entry.id) * 100;
  }

  toggleLayer(item: LayerItem) {
    if (item.kind === 'band') {
      this.store.dispatch(MetadataActions.setVisibility({ band: item.band, value: false }));
    }
    // Results do not have a visibility toggle in the store — removing is the equivalent
  }

  changeLayerOpacity(item: LayerItem, value: string) {
    const opacity = Number(value) / 100;
    if (item.kind === 'band') {
      this.layerStyleService.setOpacity(item.type, item.band.bandNumber, opacity);
    } else {
      this.layerStyleService.setResultOpacity(item.entry.id, opacity);
      item.entry.layer.setOpacity(opacity);
    }
  }

  removeLayer(item: LayerItem) {
    if (item.kind === 'band') {
      this.store.dispatch(MetadataActions.setVisibility({ band: item.band, value: false }));
    } else {
      // CHANGED: mirrors calculation-history eye-slash behavior exactly.
      // resultRemoved$ triggers map.component → resultLayerGroup → resultLayerService,
      // so the layer disappears from map and Layer Manager automatically.
      this.calcService.removeResultPixels(item.entry.id);
      this.layerStyleService.clearResultOpacity(item.entry.id);
    }
  }

  drop(event: CdkDragDrop<LayerItem[]>) {
    moveItemInArray(this.layers, event.previousIndex, event.currentIndex);
  }
}
