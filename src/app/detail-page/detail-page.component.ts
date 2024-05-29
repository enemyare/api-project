import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { userList } from '../interfaces';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent implements OnInit{
  public object?: userList
  public usersList$!: Observable<userList>
  public userId!: number

  constructor(private route: ActivatedRoute,private _postService: PostService){

  }

  ngOnInit(): void {
    this.usersList$ = this._postService.getUserList(1, 12)
    this.route.params.subscribe((params: Params) => {
      this.userId = Number(params['id'])
  })}
}
