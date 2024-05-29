import { Component } from '@angular/core';
import { PatchUser, UserById, UserCard } from '../interfaces';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './edit-detail-page.component.html',
  styleUrl: './edit-detail-page.component.css'
})
export class EditDetailPageComponent {
  public user$!: Observable<UserById>
  public userId!: number
  public editForm!: FormGroup
  protected userObj: PatchUser ={
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
  }
  constructor(private route: ActivatedRoute,private _postService: PostService){
    this.editForm = new FormGroup({
      email: new FormControl(""),
      first_name: new FormControl(""),
      last_name: new FormControl(""),
      avatar: new FormControl("")
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.userId = Number(params['id'])
    })
    this.user$ = this._postService.getUserById(this.userId)
  }

  public editUser(){
    this.userObj.avatar = this.editForm.value.avatar
    this.userObj.first_name = this.editForm.value.first_name
    this.userObj.last_name = this.editForm.value.last_name
    this.userObj.email = this.editForm.value.email
    this._postService.patchUser(this.userId)
  }
}
