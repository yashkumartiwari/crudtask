import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditUserComponent } from './pages/add-edit-user/add-edit-user.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostsandcommentsComponent } from './pages/postsandcomments/postsandcomments.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path:"add-edit/:action/:userEmail",component:AddEditUserComponent},
  {path:"posts",component:PostsandcommentsComponent ,children:[
    {path:"comments/:id",component:CommentsComponent}
  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
