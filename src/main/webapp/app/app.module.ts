import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MonProfSharedModule } from 'app/shared/shared.module';
import { MonProfCoreModule } from 'app/core/core.module';
import { MonProfAppRoutingModule } from './app-routing.module';
import { MonProfHomeModule } from './home/home.module';
import { MonProfEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MonProfSharedModule,
    MonProfCoreModule,
    MonProfHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MonProfEntityModule,
    MonProfAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class MonProfAppModule {}
