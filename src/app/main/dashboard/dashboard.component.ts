import { Component, OnInit, Inject } from '@angular/core';
import {CategoryServices} from './Categories.Services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';
import { DocumentService } from '../documents/documents.service';
const URL = 'http://localhost:3000/api/upload';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards ;
  currentsession = JSON.parse(localStorage.getItem('currentsession'));
  router: any;

  constructor(private categoryservice: CategoryServices, private documentservice: DocumentService,
    public dialog: MatDialog) { 
    
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadMainCategories();  
    this.getCardsDetails();

  }

  // tslint:disable-next-line:typedef
  loadMainCategories(){
    this.categoryservice.getCategories(this.currentsession.Token).subscribe(response => {
      console.log(response);
     
    });

  }

  // tslint:disable-next-line:typedef
  getCardsDetails(){
    this.categoryservice.getCards(this.currentsession.Token).subscribe(response => {
      console.log(response);
      this.cards = response;
      this.cards.Cards.forEach(element => {
        element['isOpen'] = false ;
        console.log(element);
      });
    });
  }

  /********************************************************************************** */

  // tslint:disable-next-line:typedef
  openUpload(){
    const dialogRef = this.dialog.open(UploadModal);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
 
  }






  /******************************************************************************* */

  // tslint:disable-next-line:typedef
  openCatergory(){
    const dialogRef = this.dialog.open(CategoryModal);
  }
 
  // tslint:disable-next-line:typedef
  showDocDetails(card){
    console.log(card);
    localStorage.setItem('docDetails', JSON.stringify(card));
    const dialogRef = this.dialog.open(DocDetailsModal);
  }

  goToList(){
    console.log('in goto');
    // this.router.navigate(['/documents']);
  }
    
}

@Component({
  templateUrl: 'documents-modal-dialog.html',
  styleUrls: ['./dashboard.component.scss']
})

// tslint:disable-next-line:component-class-suffix
export class DocDetailsModal implements OnInit{
  doc;
  id: any;
  
  currentsession = JSON.parse(localStorage.getItem('currentsession'));
 constructor(public dialogRef: MatDialogRef<DocDetailsModal>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialog,
    private documentservice: DocumentService){

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  // tslint:disable-next-line:typedef
  closeNow(){
    console.log('closeNow closed');
    this.dialogRef.close();
  }
  // tslint:disable-next-line:typedef
  search(){
    console.log('search called');
  }
  // tslint:disable-next-line:typedef
  shareDocument(){
    console.log('shareDocument is called');
    // const dialogRef = this.dialog.open(CategoryModal);

  }
  // tslint:disable-next-line:typedef
  editDocument(){
    console.log('editDocument is called');
    const dialogRef = this.dialog.open(CategoryModal);

  }

  /*********************************************************************** */
  // tslint:disable-next-line:typedef
  deleteDocument(Document){
    alert('Are you sure , You want to delete this Document?');
    this.documentservice.deleteDocument(Document.documentID, this.currentsession.Token);
  }
  documentID(documentID: any, Token: any): any {
    throw new Error('Method not implemented.');
  }

  /******************************************************************************* */
  // tslint:disable-next-line:typedef
  list(){
    // const dialogRef = this.dialog.open(CategoryModal);

  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.doc = JSON.parse(localStorage.getItem('docDetails'));
  }

}

@Component({
  templateUrl: 'category-modal-dialog.html',
  styleUrls: ['./dashboard.component.scss']
})

// tslint:disable-next-line:component-class-suffix
export class CategoryModal implements OnInit {
 constructor(public dialogRef: MatDialogRef<CategoryModal>,
    @Inject(MAT_DIALOG_DATA) public data){

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  // tslint:disable-next-line:typedef
  closeNow(){
    this.dialogRef.close();
  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
 
  }

}

@Component({
  templateUrl: 'upload-modal-dialog.html',
  styleUrls: ['./dashboard.component.scss']
})

// tslint:disable-next-line:component-class-suffix
export class UploadModal implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(public dialogRef: MatDialogRef<UploadModal>,
    @Inject(MAT_DIALOG_DATA) public data){

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  // tslint:disable-next-line:typedef
  closeNow(){
    this.dialogRef.close();
  }
  // tslint:disable-next-line:typedef
  uploadFile(){
    // this.uploader.uploadAll()

  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.uploader.onAfterAddingFile = (file) => { 
      file.withCredentials = false;
      console.log(file);
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
  };
  }

}
