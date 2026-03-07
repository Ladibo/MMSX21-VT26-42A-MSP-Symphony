import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DataLayerService, LayerRecord } from '../map/layers/data-layer.service';

@Component({
  selector: 'app-layer-manager',
  templateUrl: './layer-manager.component.html',
  styleUrls: ['./layer-manager.component.scss']
})
export class LayerManagerComponent implements OnInit, OnDestroy {
  @Input() isExpanded = false;

  layers: LayerRecord[] = [];
  primaryLayers: LayerRecord[] = [];
  secondaryLayers: LayerRecord[] = [];

  private sub?: Subscription;

  // IDs of layers that should be in the primary section
  private readonly primaryLayerIds = [
    'background-layer',
    'area-layer',
    'scenario-layer'
  ];

  constructor(private dataLayerService: DataLayerService) {}

  ngOnInit() {
    this.sub = this.dataLayerService.layers$.subscribe(layers => {
      this.layers = [...layers].sort((a, b) => (b.zIndex ?? 0) - (a.zIndex ?? 0));

      // Split layers into primary and secondary
      this.primaryLayers = this.layers.filter(l => this.primaryLayerIds.includes(l.id));
      this.secondaryLayers = this.layers.filter(l => !this.primaryLayerIds.includes(l.id));
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  toggleLayer(layer: LayerRecord) {
    this.dataLayerService.setLayerVisibility(layer.id, !layer.visible);
  }

  changeOpacity(layer: LayerRecord, value: number) {
    this.dataLayerService.setLayerOpacity(layer.id, value / 100);
  }

  removeLayer(layer: LayerRecord) {
    this.dataLayerService.removeLayer(layer.id);
  }

  drop(event: CdkDragDrop<LayerRecord[]>) {
    moveItemInArray(this.secondaryLayers, event.previousIndex, event.currentIndex);

    // Reconstruct full order: primary layers first, then reordered secondary
    const newOrderIds = [
      ...this.primaryLayers.map(l => l.id),
      ...this.secondaryLayers.map(l => l.id)
    ];

    this.dataLayerService.reorder(newOrderIds);
  }
}
