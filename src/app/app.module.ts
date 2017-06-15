import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { MdToolbarModule, MdButtonModule, MdSidenavModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Sidenav } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { ModalDialog } from './modal/modal.component'

import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    Sidenav,
    HomeComponent,
    ContactComponent,
    UserFormComponent,
    UserGridComponent,
    ModalDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdIconModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'grid',
        component: UserGridComponent
      },
      {
        path: 'form',
        component: UserFormComponent
      },
      {
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/home', 
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
