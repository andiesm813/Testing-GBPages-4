import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { GlobalElectricityDemandType } from '../models/financial/global-electricity-demand-type';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-master-view',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public financialGlobalElectricityDemand: GlobalElectricityDemandType[] = [];

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    this.financialService.getGlobalElectricityDemand().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialGlobalElectricityDemand = data,
      error: (_err: any) => this.financialGlobalElectricityDemand = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
