import { Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { authGuard } from './auth.guard';
import { EditDetailPageComponent } from './edit-detail-page/edit-detail-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

export const routes: Routes = [
  {path: 'register', component: RegistrationPageComponent },
  {path: 'home', component: HomePageComponent, canActivate: [authGuard] },
  {path: 'home/myprofile', component: MyProfileComponent, canActivate: [authGuard] },
  {path: 'home/:id', component: DetailPageComponent, canActivate: [authGuard] },
  {path: 'home/:id/edit', component: EditDetailPageComponent, canActivate: [authGuard] },
  {path: ' ', redirectTo: "/register", pathMatch: 'full'},
  {path: '**', component: RegistrationPageComponent}
];
