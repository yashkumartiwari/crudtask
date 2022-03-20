import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import{MatTableModule} from '@angular/material/table';
import{MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';



const MATERIAL_MODULES = [
  MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,MatTableModule,MatSortModule,MatPaginatorModule,MatDialogModule,MatSelectModule,
]
@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ],
  exports: [MATERIAL_MODULES],
})
export class MaterialModule { }
