import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GlobalElectricityDemandType } from '../models/financial/global-electricity-demand-type';
import { Financial } from '../static-data/financial';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  public getGlobalElectricityDemand(): Observable<GlobalElectricityDemandType[]> {
    return of(Financial['GlobalElectricityDemandType']);
  }
}
