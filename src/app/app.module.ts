import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {  MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { HomeComponent } from './outer/home/home.component';
import { HeaderComponent } from './outer/header/header.component';
import { FooterComponent } from './outer/footer/footer.component';
import { LoginComponent } from './outer/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
;
import { HttpClient, HttpClientModule ,provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { PurchaseComponent } from './admin/purchase/purchase.component';

import { SignupComponent } from './outer/signup/signup.component';

import { MatIconModule } from '@angular/material/icon';
import { AdminOuterComponent } from './admin/admin-outer/admin-outer.component';
import { AddpatientComponent } from './admin/addpatient/addpatient.component';
import { ViewpatientComponent } from './admin/viewpatient/viewpatient.component';
import { PlaceorderComponent } from './admin/placeorder/placeorder.component';


@NgModule({
  declarations: [
    AppComponent,
  
    AdminHeaderComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AdminHomeComponent,
    PurchaseComponent,
   
    SignupComponent,
 
    AdminOuterComponent,
    AddpatientComponent,
    ViewpatientComponent,
    PlaceorderComponent
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatListModule,
    MatIconAnchor,
    MatIconModule
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  
    HttpClient,
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }