import { Component, Inject, ViewEncapsulation , ViewChild , OnInit} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ConnectionsServices} from './connections.service';
import { AuthenticationService } from '../login/Authentication.Service';
import { Router } from '@angular/router';




@Component({
    selector     : 'mat-table',
    templateUrl  : './connections.component.html',
    styleUrls    : ['./connections.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class  ConnectionsComponent implements OnInit{
  connections;
  isloading = false;
  displayedColumns: string[] = ['actions', 'name', 'category', 'owner', 'modified', 'sharedWith', 'permission'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private connetionservice: ConnectionsServices){
    
    }
    ngOnInit() {
      this.isloading = true;
      this.connetionservice.getGetConnectionsList().subscribe(response => {
        console.log(response.json());
        this.isloading = false;
        this.dataSource = new MatTableDataSource(response.json());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }

}
