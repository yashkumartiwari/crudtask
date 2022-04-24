import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/core/services/http-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  postId: any;
  comments: any;

  constructor(private _httpService:HttpServiceService,private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.postId = this._activeRoute.paramMap.subscribe(params =>{
      
    });
    this.postId != 
    this.getAllComments()

  }
  getAllComments(){
    this._httpService.getAllcommets(this.postId).subscribe(res=>{
      this.comments = res;
    });
  }

}
