import { Component, inject } from '@angular/core';
import { PostService,} from '../post.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../autentication.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { filterData, userList } from '../interfaces';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule, ReactiveFormsModule, FilterPipe, NgxPaginationModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public usersList$!: Observable<userList>
  public userEmaiValue!: string
  public isOddValue: boolean = false
  public isEvenValue: boolean = false
  public page:number  = 1

  filterData: filterData  = {
    even: false,
    odd: false,
    userId: 0,
    userEmail: ''
  }

  constructor(private postService: PostService, private _authService: AuthService, private router: Router, private route: ActivatedRoute ){

  }

  public redirectTo(id: number):void {
    this.router.navigate([`${id}`], {relativeTo: this.route})
  }


  ngOnInit(): void {
    this.usersList$ = this.postService.getUserList(1, 12)
  }

  public isEven(){
    this.isEvenValue = !this.isEvenValue
    this.filterData.even = this.isEvenValue

  }

  public isOdd(){
    this.isOddValue = !this.isOddValue
    this.filterData.odd = this.isOddValue

  }

  public reset(){
    this.filterData.odd = false
    this.filterData.even = false
    this.filterData.userEmail = ""
    this.filterData.userId = 0
    this.isOddValue = false
    this.isEvenValue = false
  }


  public search(){
    if (Number.isFinite(this.userEmaiValue)){
     this.filterData.userId = +this.userEmaiValue
    }
    else{
      this.filterData.userEmail = this.userEmaiValue

    }
  }

  public logout(){
    this._authService.logout()
  }
}
