import { NgModule } from '@angular/core';
import { BofaAnalyticsSDK } from './analytics.service';

@NgModule({
  providers: [BofaAnalyticsSDK]
})
export class BofaAnalyticsModule {}