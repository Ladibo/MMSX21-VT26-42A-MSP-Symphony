import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BandType } from '@data/metadata/metadata.interfaces';
import { isNgTemplate } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class LayerStyleService {

  // Opacity state for both bands and results, keyed by:
  //   bands:   `${type.toLowerCase()}-${bandNumber}`  e.g. "ecosystem-3"
  //   results: `result-${calculationId}`              e.g. "result-42"

  private opacityMap = new Map<string, number>();
  private opacitySubject = new BehaviorSubject<Map<string, number>>(new Map());

  private bandKey(type: BandType, bandNumber: number): string {
    return `${type.toLowerCase()}-${bandNumber}`;
  }

  private resultKey(id: number): string {
    return `result-${id}`;
  }

  // --- Bands ---

  setOpacity(type: BandType, bandNumber: number, opacity: number): void {
    this.opacityMap.set(this.bandKey(type, bandNumber), opacity);
    this.opacitySubject.next(new Map(this.opacityMap));
  }

  getOpacity(type: BandType, bandNumber: number): number {
    return this.opacityMap.get(this.bandKey(type, bandNumber)) ?? 1;
  }

  getOpacityChanges(): Observable<Map<string, number>> {
    return this.opacitySubject.asObservable();
  }

  // --- Results ---

  setResultOpacity(id: number, opacity: number): void {
    this.opacityMap.set(this.resultKey(id), opacity);
    this.opacitySubject.next(new Map(this.opacityMap));
  }

  getResultOpacity(id: number): number {
    return this.opacityMap.get(this.resultKey(id)) ?? 1;
  }

  clearResultOpacity(id: number): void {
    this.opacityMap.delete(this.resultKey(id));
    this.opacitySubject.next(new Map(this.opacityMap));
  }
}
