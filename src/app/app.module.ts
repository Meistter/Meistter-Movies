import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyInterceptor } from './interceptors/key.interceptor';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule,
    PagerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: KeyInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
