import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ProfileComponent } from './profile/profile.component';
import { ActivationComponent } from './activation/activation.component';
import { StorageService } from './storageservice/storage.service';
import { MessagePanelComponent } from './messagepanel/messagepanel.component';
import { TranslateService } from './translate/translate.service';
import { TranslatePipe } from './translate/translate.pipe';
import { TRANSLATION_PROVIDERS } from './translate/translations';
import { MainMenuService } from './main-menu/main-menu.service';
import { AboutService } from './about/about.service';
import { RegistrationService } from './registration/registration.service';

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
    LoadIndicatorComponent,
    ProfileComponent,
    ActivationComponent,
    MessagePanelComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JsonpModule,
    ReactiveFormsModule
  ],
  providers: [
    StorageService, 
    TRANSLATION_PROVIDERS, 
    TranslateService, 
    Title, 
    MainMenuService, 
    AboutService,
    RegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
