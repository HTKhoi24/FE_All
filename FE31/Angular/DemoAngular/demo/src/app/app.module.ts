import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demoComponent/Demo.component';
import { E1IndexComponent } from './exercise-1/e1-index/e1-index.component';
import { E1HeaderComponent } from './exercise-1/e1-header/e1-header.component';
import { E1ContentComponent } from './exercise-1/e1-content/e1-content.component';
import { E1SidebarComponent } from './exercise-1/e1-sidebar/e1-sidebar.component';
import { E1FooterComponent } from './exercise-1/e1-footer/e1-footer.component';
import { E2HeaderComponent } from './execise-2/e2-header/e2-header.component';
import { E2CarouselComponent } from './execise-2/e2-carousel/e2-carousel.component';
import { E2ContentComponent } from './execise-2/e2-content/e2-content.component';
import { E2FooterComponent } from './execise-2/e2-footer/e2-footer.component';
import { E2ContentCardComponent } from './execise-2/e2-content-card/e2-content-card.component';
import { E2IndexComponent } from './execise-2/e2-index/e2-index.component';
import { DemoOnewayComponent } from './demoDatabinding/demo-oneway/demo-oneway.component';
import { E3IndexComponent } from './exercise-3/e3-index/e3-index.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    E1IndexComponent,
    E1HeaderComponent,
    E1ContentComponent,
    E1SidebarComponent,
    E1FooterComponent,
    E2HeaderComponent,
    E2CarouselComponent,
    E2ContentComponent,
    E2FooterComponent,
    E2ContentCardComponent,
    E2IndexComponent,
    DemoOnewayComponent,
    E3IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
