import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user.model';
import { HttpServiceService } from 'src/app/core/services/http-service.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  columnsToDisplay: string[] = [
    'firstName',
    'email',
    'action',
  ];

  dataSource: MatTableDataSource<User>;
  totalCount: number;


  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  allUserList: User[];
  numbers = [1,2,3,4,5,6,7,8,9,0]
  operators = ["+","-","x","/"]
  value: string;
  numberOfPlayers:number;
  numberOfRounds: number[] = [];
  show: boolean;

  constructor(
    private router: Router,
    private _httpService: HttpServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getTableData();
  }
  openDialog(element: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    // const snack = this.snackBar.open('Snack bar open before dialog');

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onDelete(element);
      }
    });
  }

async getTableData() {

    this.allUserList = await this._httpService.getAllUsers();
    this.dataSource = new MatTableDataSource<User>(
      this.allUserList
    );
    this.totalCount = this.allUserList.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  
  onAdd(){
    this.router.navigate(['add-edit','add','Add User']);
  } 
  onEdit(element: User) {
    this.router.navigate(['add-edit','edit',element.email]);
  }  
  onDelete(element:User) {
    this.allUserList.forEach( (user, index) => {
      if(user === element) this.allUserList.splice(index,1);
    });
    if(this._httpService.deleteUser(this.allUserList)){
     
      alert("User Deleted Successfully")
      this.getTableData();
    }
  } 
  // gameNumber(i){
  //   return new Array(i)
  // }
  // showFixture(){
  //  this.numberOfRounds = []
  //  let tempnumberOfPlayer =this.numberOfPlayers;
  //   for (var i = 0; tempnumberOfPlayer >= 2; i++){
  //     tempnumberOfPlayer = Math.round(tempnumberOfPlayer/2)
  //     this.numberOfRounds.push(tempnumberOfPlayer);
  //   }
  //   this.show = true;
    
  // }

}



