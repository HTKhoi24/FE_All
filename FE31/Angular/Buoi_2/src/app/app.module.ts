import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from "./app.component";
import { DemoComponent } from "./demoComponent/Demo.component";
import { E1IndexComponent } from "./exercise-1/e1-index/e1-index.component";
import { E1HeaderComponent } from "./exercise-1/e1-header/e1-header.component";
import { E1ContentComponent } from "./exercise-1/e1-content/e1-content.component";
import { E1SidebarComponent } from "./exercise-1/e1-sidebar/e1-sidebar.component";
import { E1FooterComponent } from "./exercise-1/e1-footer/e1-footer.component";
import { DemoOnewayComponent } from "./demoDatabinding/demo-oneway/demo-oneway.component";
import { FormsModule } from "@angular/forms";
import { DemoDirectiveComponent } from "./DemoDirective/demo-directive/demo-directive.component";
import { ExerciseDirectiveComponent } from "./DemoDirective/exercise-directive/exercise-directive.component";
import { ProductManagementComponent } from "./DemoDirective/product-management/product-management.component";
import { DemoDataCrossComponentComponent } from "./DemoDataCrossComponent/demo-data-cross-component/demo-data-cross-component.component";
import { StudentItemComponent } from "./DemoDataCrossComponent/student-item/student-item.component";
import { BusIndexComponent } from "./bookBusTicket/bus-index/bus-index.component";
import { SeatItemComponent } from "./bookBusTicket/seat-item/seat-item.component";
import { ShoppingCartIndexComponent } from "./shoppingCart/shopping-cart-index/shopping-cart-index.component";
import { ProductItemComponent } from "./shoppingCart/product-item/product-item.component";
import { CartItemComponent } from "./shoppingCart/cart-item/cart-item.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DemoChildComponent } from './demoLifecycle/demo-child/demo-child.component';
import { DemoLifecycleComponent } from './demoLifecycle/demo-lifecycle/demo-lifecycle.component';
import { MovieListComponent } from './MovieManagement/movie-list/movie-list.component';
import { MovieItemComponent } from './MovieManagement/movie-item/movie-item.component';
import {MatIconModule} from '@angular/material/icon';
import { MovieModalComponent } from './MovieManagement/movie-modal/movie-modal.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    E1IndexComponent,
    E1HeaderComponent,
    E1ContentComponent,
    E1SidebarComponent,
    E1FooterComponent,
    DemoOnewayComponent,
    DemoDirectiveComponent,
    ExerciseDirectiveComponent,
    ProductManagementComponent,
    DemoDataCrossComponentComponent,
    StudentItemComponent,
    BusIndexComponent,
    SeatItemComponent,
    ShoppingCartIndexComponent,
    ProductItemComponent,
    CartItemComponent,
    DemoChildComponent,
    DemoLifecycleComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieModalComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
