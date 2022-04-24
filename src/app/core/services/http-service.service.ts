import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }


  getAllUsers(){
    return JSON.parse(localStorage.getItem('userList'))
  }

  deleteUser(data:User[]){
    localStorage.setItem('userList', JSON.stringify(data))
    return true

  }
  addUser(data:User[]){
    localStorage.setItem('userList', JSON.stringify(data))
    return true

  }
  editUser(data:User[]){
    localStorage.setItem('userList', JSON.stringify(data))
    return true
  }


  //To get all posts from
  getAllPosts(){
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts`)
  }
  //To get all Comments of a post
  getAllcommets(id){
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
