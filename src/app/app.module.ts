import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, FormControlName, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { DisplayService } from './display.service';
import { RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayComponent,
    ChartsComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'display',
        component: DisplayComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'chart',
        component: ChartsComponent
      },
      {
        path: '**',
        component: LoginComponent
      },
      {
        path: '',
        component: LoginComponent
      }
    ])

  ],
  providers: [
    DisplayService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
