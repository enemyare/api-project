import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from './interfaces';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  public getUserList(page: number, per_page: number): Observable<UserList>{
    const params = new HttpParams()
    .set('page', page.toString())
    .set('per_page', per_page.toString());
    return this._http.get<UserList>('https://reqres.in/api/users', {params})
  }

  public patchUser(id:number){
    return this._http.patch(`https://reqres.in/api/users/${id}`, id)
  }

  public getUserById(id:number, ): any{
    return this._http.get(`https://reqres.in/api/users/${id}`)
  }
}
