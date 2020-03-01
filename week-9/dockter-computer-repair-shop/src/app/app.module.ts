import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatCardModule, MatCheckboxModule, MatOptionModule, MatSelectModule, MatInputModule, MatFormFieldModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    OrderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
