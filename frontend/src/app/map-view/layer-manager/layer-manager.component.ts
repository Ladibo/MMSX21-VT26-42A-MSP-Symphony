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

  editingLayerId: string | null = null;
  editingName: string = '';

  private sub?: Subscription;

  private readonly primaryLayerIds = [
    'background-layer',
    'area-layer',
    'scenario-layer'
  ];

  constructor(private dataLayerService: DataLayerService) {}

  ngOnInit() {
    this.sub = this.dataLayerService.layers$.subscribe(layers => {
      this.layers = [...layers].sort((a, b) => (b.zIndex ?? 0) - (a.zIndex ?? 0));

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

    const secondaryIds = this.secondaryLayers.map(l => l.id);
    this.dataLayerService.reorderSecondary(secondaryIds);
  }

  startEditing(layer: LayerRecord) {
    this.editingLayerId = layer.id;
    this.editingName = layer.name;
  }

  cancelEditing() {
    this.editingLayerId = null;
    this.editingName = '';
  }

  saveLayerName(layer: LayerRecord) {
    if (this.editingName.trim() && this.editingName !== layer.name) {
      this.dataLayerService.renameLayer(layer.id, this.editingName.trim());
    }
    this.cancelEditing();
  }

  onEditKeydown(event: KeyboardEvent, layer: LayerRecord) {
    if (event.key === 'Enter') {
      this.saveLayerName(layer);
    } else if (event.key === 'Escape') {
      this.cancelEditing();
    }
  }
}
