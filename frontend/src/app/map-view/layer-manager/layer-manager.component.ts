import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { State } from '@src/app/app-reducer';
import { Band, BandType } from '@data/metadata/metadata.interfaces';
import { MetadataActions, MetadataSelectors } from '@data/metadata';
import { LayerStyleService } from '../map/layers/layer-style.service';
import { ResultLayerService, ResultEntry } from '../map/layers/result-layer.service';
import { CalculationService } from '@data/calculation/calculation.service';
import { TranslateService } from '@ngx-translate/core';

export interface PrimaryLayerItem {
  id: string;
  name: string;
  visible: boolean;
  opacity: number;
  instance: any;
}

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
  @Input() isExpanded = false;

  primaryLayers: PrimaryLayerItem[] = [];
  secondaryLayers: LayerItem[] = [];

  editingLayerId: string | null = null;
  editingName: string = '';

  private sub?: Subscription;

  constructor(
    private store: Store<State>,
    public layerStyleService: LayerStyleService,
    private resultLayerService: ResultLayerService,
    private calcService: CalculationService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.initializePrimaryLayers();

    this.sub = combineLatest([
      this.store.select(MetadataSelectors.selectVisibleBands),
      this.resultLayerService.results$
    ]).subscribe(([components, results]) => {
      const bands: BandLayerItem[] = [
        ...components.ecoComponent.map(b => ({ kind: 'band' as const, band: b, type: 'ECOSYSTEM' as BandType })),
        ...components.pressureComponent.map(b => ({ kind: 'band' as const, band: b, type: 'PRESSURE' as BandType }))
      ];
      const resultItems: ResultLayerItem[] = results.map(r => ({ kind: 'result' as const, entry: r }));
      this.secondaryLayers = [...bands, ...resultItems];
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  private initializePrimaryLayers() {
    this.primaryLayers = [
      {
        id: 'background',
        name: this.translateService.instant('map.layer-manager.layer-names.background'),
        visible: true,
        opacity: 1,
        instance: null
      },
      {
        id: 'user-areas',
        name: this.translateService.instant('map.layer-manager.layer-names.user-areas'),
        visible: true,
        opacity: 1,
        instance: null
      },
      {
        id: 'scenario',
        name: this.translateService.instant('map.layer-manager.layer-names.scenario'),
        visible: true,
        opacity: 1,
        instance: null
      },
      {
        id: 'highlights',
        name: this.translateService.instant('map.layer-manager.layer-names.highlights'),
        visible: true,
        opacity: 1,
        instance: null
      }
    ];
  }

  public setPrimaryLayerInstances(instances: {
    background?: any,
    userAreas?: any,
    scenario?: any,
    highlights?: any
  }) {
    const layerMap: { [key: string]: any } = {
      'background': instances.background,
      'user-areas': instances.userAreas,
      'scenario': instances.scenario,
      'highlights': instances.highlights
    };

    this.primaryLayers.forEach(layer => {
      layer.instance = layerMap[layer.id];
    });
  }

  getPrimaryLayerId(layer: PrimaryLayerItem): string {
    return layer.id;
  }

  getSecondaryLayerId(item: LayerItem): string {
    return item.kind === 'band'
      ? `${item.type}-${item.band.bandNumber}`
      : `result-${item.entry.id}`;
  }

  getPrimaryLayerName(layer: PrimaryLayerItem): string {
    return layer.name;
  }

  getSecondaryLayerName(item: LayerItem): string {
    return item.kind === 'band' ? item.band.title : item.entry.name;
  }

  getPrimaryLayerOpacity(layer: PrimaryLayerItem): number {
    return layer.opacity * 100;
  }

  getSecondaryLayerOpacity(item: LayerItem): number {
    return item.kind === 'band'
      ? this.layerStyleService.getOpacity(item.type, item.band.bandNumber) * 100
      : this.layerStyleService.getResultOpacity(item.entry.id) * 100;
  }

  togglePrimaryLayer(layer: PrimaryLayerItem) {
    layer.visible = !layer.visible;
    if (layer.instance && typeof layer.instance.setVisible === 'function') {
      layer.instance.setVisible(layer.visible);
    }
  }

  toggleSecondaryLayer(item: LayerItem) {
    if (item.kind === 'band') {
      this.store.dispatch(MetadataActions.setVisibility({ band: item.band, value: false }));
    }
  }

  changePrimaryOpacity(layer: PrimaryLayerItem, value: number) {
    layer.opacity = value / 100;
    if (layer.instance && typeof layer.instance.setOpacity === 'function') {
      layer.instance.setOpacity(layer.opacity);
    }
  }

  changeSecondaryOpacity(item: LayerItem, value: string) {
    const opacity = Number(value) / 100;
    if (item.kind === 'band') {
      this.layerStyleService.setOpacity(item.type, item.band.bandNumber, opacity);
    } else {
      this.layerStyleService.setResultOpacity(item.entry.id, opacity);
      item.entry.layer.setOpacity(opacity);
    }
  }

  removeSecondaryLayer(item: LayerItem) {
    if (item.kind === 'band') {
      this.store.dispatch(MetadataActions.setVisibility({ band: item.band, value: false }));
    } else {
      this.calcService.removeResultPixels(item.entry.id);
      this.layerStyleService.clearResultOpacity(item.entry.id);
    }
  }

  startEditingPrimary(layer: PrimaryLayerItem) {
    this.editingLayerId = this.getPrimaryLayerId(layer);
    this.editingName = layer.name;
  }

  startEditingSecondary(item: LayerItem) {
    this.editingLayerId = this.getSecondaryLayerId(item);
    this.editingName = this.getSecondaryLayerName(item);
  }

  cancelEditing() {
    this.editingLayerId = null;
    this.editingName = '';
  }

  savePrimaryLayerName(layer: PrimaryLayerItem) {
    if (this.editingName.trim() && this.editingName !== layer.name) {
      layer.name = this.editingName.trim();
    }
    this.cancelEditing();
  }

  saveSecondaryLayerName(item: LayerItem) {
    if (this.editingName.trim() && this.editingName !== this.getSecondaryLayerName(item)) {
      if (item.kind === 'band') {
        item.band.title = this.editingName.trim();
      } else {
        item.entry.name = this.editingName.trim();
      }
    }
    this.cancelEditing();
  }

  onEditKeydownPrimary(event: KeyboardEvent, layer: PrimaryLayerItem) {
    if (event.key === 'Enter') {
      this.savePrimaryLayerName(layer);
    } else if (event.key === 'Escape') {
      this.cancelEditing();
    }
  }

  onEditKeydownSecondary(event: KeyboardEvent, item: LayerItem) {
    if (event.key === 'Enter') {
      this.saveSecondaryLayerName(item);
    } else if (event.key === 'Escape') {
      this.cancelEditing();
    }
  }

  drop(event: CdkDragDrop<LayerItem[]>) {
    moveItemInArray(this.secondaryLayers, event.previousIndex, event.currentIndex);
  }
}
