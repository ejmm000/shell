import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { startsWith } from './router.utils';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        matcher: startsWith('prueba'),
        component: WrapperComponent,
        data: {
          importName: 'mfePrueba',
          elementName: 'prueba-element'
        }
      },
      {
        matcher: startsWith('mfe1'),
        component: WrapperComponent,
        data: {
          importName: 'mfe',
          elementName: 'mfe-element'
        }
      }
    ]),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
