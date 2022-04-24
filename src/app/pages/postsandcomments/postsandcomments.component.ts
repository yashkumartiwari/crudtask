import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/core/services/http-service.service';

@Component({
  selector: 'app-postsandcomments',
  templateUrl: './postsandcomments.component.html',
  styleUrls: ['./postsandcomments.component.css']
})
export class PostsandcommentsComponent implements OnInit {
  allPosts: any;

  constructor(private _httpService:HttpServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this._httpService.getAllPosts().subscribe(res=>{
      this.allPosts = res;
      console.log(this.allPosts)
    })

  }
  getAllComments(id){
    this.router.navigate(['posts/comments',id])
  }

}
