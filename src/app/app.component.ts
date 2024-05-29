import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { EditDetailPageComponent } from './edit-detail-page/edit-detail-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RegistrationPageComponent, DetailPageComponent, HomePageComponent, MyProfileComponent,EditDetailPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{



}
