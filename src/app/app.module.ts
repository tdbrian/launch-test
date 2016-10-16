import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout/simple-layout.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumb.component';
import { AsideToggleDirective } from './shared/directives/aside.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/directives/sidebar.directive';
import { VerticalAlignMiddleDirective } from './shared/directives/vertical-align-middle.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    RegisterComponent,
    ServerErrorComponent,
    PageNotFoundComponent,
    BreadcrumbsComponent,
    AsideToggleDirective,
    SIDEBAR_TOGGLE_DIRECTIVES,
    VerticalAlignMiddleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: '', component: FullLayoutComponent, children: [
        { path: 'dashboard', component: PageNotFoundComponent }
      ]},
      { path: '', component: SimpleLayoutComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: '404', component: PageNotFoundComponent },
        { path: '500', component: ServerErrorComponent }
      ]}
    ])
  ],
  providers: [
    DashboardService,
    { provide: 'Window',  useValue: window }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
