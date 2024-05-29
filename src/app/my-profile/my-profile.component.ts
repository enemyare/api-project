import { Component, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { userCard } from '../interfaces';
import { RouterLink } from '@angular/router';
import { UiImageLoaderDirective } from '../img.directive';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [RouterLink, UiImageLoaderDirective, ReactiveFormsModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnInit, OnChanges {
  public user!: userCard;
  public obj!: any;
  public editProfile!: FormGroup;

  constructor(private cdr: ChangeDetectorRef) {
    this.editProfile = new FormGroup({
      email: new FormControl(""),
      first_name: new FormControl(""),
      avatar: new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['localStorage']) {
      this.loadUserData();
    }
  }

  protected edit(): void {
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(this.editProfile.value));
    this.loadUserData();  
  }

  private loadUserData(): void {
    this.obj = localStorage.getItem('user');
    if (this.obj) {
      this.user = JSON.parse(this.obj);
      this.editProfile.patchValue({
        email: this.user.email,
        first_name: this.user.first_name,
        avatar: this.user.avatar,
      });
      this.cdr.detectChanges();
    }
  }
}
