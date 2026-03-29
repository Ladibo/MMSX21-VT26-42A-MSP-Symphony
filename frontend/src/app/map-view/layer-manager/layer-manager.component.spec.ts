import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LayerManagerComponent } from './layer-manager.component';
import { AutoSelectDirective } from './auto-select.directive';
import { provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '@shared/shared.module';
import { TranslationSetupModule } from '@src/app/app-translation-setup.module';
import { StoreModule } from '@ngrx/store';
import { LayerStyleService } from '../map/layers/layer-style.service';
import { ResultLayerService } from '../map/layers/result-layer.service';
import { CalculationService } from '@data/calculation/calculation.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { of } from 'rxjs';
import { MetadataSelectors } from '@data/metadata';
import { CalculationSelectors } from '@data/calculation';
import { initialState as calculation } from '@data/calculation/calculation.reducers';
import { initialState as metadata } from '@data/metadata/metadata.reducers';
import { initialState as user } from '@data/user/user.reducers';

describe('LayerManagerComponent', () => {
  let component: LayerManagerComponent;
  let fixture: ComponentFixture<LayerManagerComponent>;

  const mockLayerStyleService = {
    getOpacity: () => 1,
    getResultOpacity: () => 1,
    getBandVisibility: () => true,
    setOpacity: () => {},
    setResultOpacity: () => {},
    setBandVisibility: () => {},
    clearResultOpacity: () => {}
  };

  const mockResultLayerService = {
    results$: of([])
  };

  const mockCalculationService = {
    removeResultPixels: () => {}
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, TranslationSetupModule, StoreModule.forRoot({}, {}), DragDropModule],
      declarations: [LayerManagerComponent, AutoSelectDirective],
      providers: [
        provideMockStore({
          initialState: { calculation, metadata, user },
          selectors: [
            { selector: MetadataSelectors.selectVisibleBands, value: { ecoComponent: [], pressureComponent: [] } },
            { selector: CalculationSelectors.selectCalculations, value: [] }
          ]
        }),
        { provide: LayerStyleService, useValue: mockLayerStyleService },
        { provide: ResultLayerService, useValue: mockResultLayerService },
        { provide: CalculationService, useValue: mockCalculationService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LayerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty secondary layer list', () => {
    expect(component.secondaryLayers).toEqual([]);
  });

  it('should toggle primary layer visibility', () => {
    const layer = component.primaryLayers[0];
    const initialVisible = layer.visible;
    component.toggleVisibility(layer);
    expect(layer.visible).toBe(!initialVisible);
  });

  it('should enter and cancel edit mode', () => {
    const layer = component.primaryLayers[0];
    component.startEditing(layer);
    expect(component.editingLayerId).toBe(layer.id);
    expect(component.editingName).toBe(layer.name);
    component.cancelEditing();
    expect(component.editingLayerId).toBeNull();
    expect(component.editingName).toBe('');
  });

  it('should save a renamed layer locally', () => {
    const layer = component.primaryLayers[0];
    component.startEditing(layer);
    component.editingName = 'My Custom Name';
    component.saveLayerName(layer);
    expect(layer.name).toBe('My Custom Name');
    expect(component.editingLayerId).toBeNull();
  });

  it('should cancel editing when name is unchanged', () => {
    const layer = component.primaryLayers[0];
    component.startEditing(layer);
    component.editingName = layer.name;
    component.saveLayerName(layer);
    expect(component.editingLayerId).toBeNull();
  });

  it('should not rename when name is blank', () => {
    const layer = component.primaryLayers[0];
    const nameBefore = layer.name;
    component.startEditing(layer);
    component.editingName = '   ';
    component.saveLayerName(layer);
    expect(layer.name).toBe(nameBefore);
  });

  it('should save layer name on Enter key', () => {
    const layer = component.primaryLayers[0];
    component.startEditing(layer);
    component.editingName = 'New Name';
    component.onEditKeydown(new KeyboardEvent('keydown', { key: 'Enter' }), layer);
    expect(layer.name).toBe('New Name');
  });

  it('should cancel editing on Escape key', () => {
    const layer = component.primaryLayers[0];
    component.startEditing(layer);
    component.editingName = 'New Name';
    component.onEditKeydown(new KeyboardEvent('keydown', { key: 'Escape' }), layer);
    expect(component.editingLayerId).toBeNull();
  });
});
