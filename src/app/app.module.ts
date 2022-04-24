import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddEditUserComponent } from './pages/add-edit-user/add-edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { ConfirmationDialogComponent } from './pages/confirmation-dialog/confirmation-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LowercasePipe } from './core/pipes/lowercase.pipe';
import { PostsandcommentsComponent } from './pages/postsandcomments/postsandcomments.component';
import { CommentsComponent } from './pages/comments/comments.component'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddEditUserComponent,ConfirmationDialogComponent, LowercasePipe, PostsandcommentsComponent, CommentsComponent
   
    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,MaterialModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
