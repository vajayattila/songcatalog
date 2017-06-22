import { AboutComponent } from './about/about.component';
import { BasedatamainComponent } from './basedatamain/basedatamain.component';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginmainComponent } from './loginmain/loginmain.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegionsComponent } from './regions/regions.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ActivationComponent } from './activation/activation.component';

export const appRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },{
    path: 'loginmain',
    component: LoginmainComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'registration',
    component: RegistrationComponent
  }, {
    path: 'basedatamain',
    component: BasedatamainComponent
  }, {
    path: 'genres',
    component: GenresComponent
  }, {
    path: 'regions',
    component: RegionsComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'logout',
    component: HomeComponent
  }, {
    path: '',
    component: HomeComponent
  }, {
    path: 'activation',
    component: ActivationComponent
  },
  { path: '**', component: PagenotfoundComponent }
];
