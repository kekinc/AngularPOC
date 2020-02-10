import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CommonService } from './services/common.service';
import { RequestLogger } from './services/requestlogger.interceptor';
import { Normalize } from './mormalize.pipe';
import { NavigationComponent } from './navigation/navigation.component';
import { Routes, RouterModule } from '@angular/router';
import { MyformComponent } from './myform/myform.component';
import { AuthGuard } from './guards/authguard';
import { RestrictedComponent } from './restricted/restricted.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'myform', component: MyformComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rxjs', component: ReactiveComponent},
  {path: 'restricted', component: RestrictedComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Normalize,
    NavigationComponent,
    MyformComponent,
    RestrictedComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CommonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestLogger,
      multi: true
    },
    AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {

}
