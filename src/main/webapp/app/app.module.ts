import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { CarSharedModule } from 'app/shared/shared.module';
import { CarCoreModule } from 'app/core/core.module';
import { CarAppRoutingModule } from './app-routing.module';
import { CarHomeModule } from './home/home.module';
import { CarEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    CarSharedModule,
    CarCoreModule,
    CarHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    CarEntityModule,
    CarAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class CarAppModule {}
