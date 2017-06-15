import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2BootstrapModule } from 'ngx-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginmainComponent } from './loginmain/loginmain.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BasedatamainComponent } from './basedatamain/basedatamain.component';
import { GenresComponent } from './genres/genres.component';
import { RegionsComponent } from './regions/regions.component';
import { AboutComponent } from './about/about.component';
import { LoadIndicatorComponent } from './loadindicator/loadindicator.component';
import { StorageService } from './storage.service';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginmainComponent,
    LoginComponent,
    RegistrationComponent,
    BasedatamainComponent,
    GenresComponent,
    RegionsComponent,
    AboutComponent,
    LoadIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JsonpModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
