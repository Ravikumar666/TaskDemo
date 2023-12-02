import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ErrorImageDirective } from './error-image.directive';
import { ScrollToDirective } from './scroll-to.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    ErrorImageDirective,
    ScrollToDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
