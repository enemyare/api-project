import { Component } from '@angular/core';
import { AuthService } from '../autentication.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../interfaces';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  public registerObg: User = {
    email: "",
    password: ""
  }
  public localObj:{email: string, avatar: string, first_name: string} = {
    email: "",
    avatar: "",
    first_name: "",
  }
  public registrationForm!: FormGroup

  constructor(private _authService: AuthService, private router: Router){
    this.registrationForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators. required),
      first_name: new FormControl('', Validators. required),
      avatar: new FormControl('', Validators. required)
    })
  }

  submit(){
    if (this.registrationForm.invalid){
      alert('Заполните все поля')
      return
    }
    else{
      this.registerObg.email = this.registrationForm.value.email
      this.registerObg.password = this.registrationForm.value.password

      this.localObj.email = this.registrationForm.value.email
      this.localObj.avatar = this.registrationForm.value.avatar
      this.localObj.first_name = this.registrationForm.value.first_name

      localStorage.setItem("user", JSON.stringify(this.localObj))
      this.registrationForm.disable()
      this._authService.register(this.registerObg).subscribe({
        next: () => this.router.navigate(["/home"]),
        error: (err) =>{
          console.log(err.error['error'])
          this.registrationForm.enable()
        }
      })
    }

  }
}
