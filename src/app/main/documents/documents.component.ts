
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DocumentService } from './documents.service';
import { AuthenticationService } from '../login/Authentication.Service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'document-component',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent  implements OnInit{
  displayedColumns: string[] = ['actions', 'name', 'category', 'owner', 'modified', 'sharedWith', 'permission'];
  currentsession = JSON.parse(localStorage.getItem('currentsession'));
  dataSource: MatTableDataSource<any>;
  isloading = false;
  public categoryID;
  public  id: any;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  FilterOwnerName: string;
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private documentService: DocumentService ,  private AuthenticationService: AuthenticationService, private rm: ActivatedRoute){
    {
      this.categoryID = null;
      rm.paramMap.subscribe(
          params => {
              if (params.get('id') != null)
              { this.categoryID = params.get('id'); }
              else {
                 
              }
              this.FilterOwnerName = params.get('docowner');

          }
      );
  }


  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.isloading = true;
   
      this.id = 2;
      this.documentService.getDocuments().subscribe(response => {
       // console.log(response.json());
        this.isloading = false;
       this.dataSource = new MatTableDataSource(response.json());
       // console.log(response.json());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }) ;   
   
   }

   // tslint:disable-next-line:typedef
   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




