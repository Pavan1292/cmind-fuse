import { Component, OnInit } from '@angular/core';
import {CategoryServices} from './Categories.Services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards ;
  constructor(private categoryservice: CategoryServices) { 
    
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadMainCategories();  
    // this.IsCategoryDisplay = true;
    // this.IsCategoryEdit = false;
    // tslint:disable-next-line:no-shadowed-variable
    // const cards: cards = {
    //     label: 'Categories',           
    //     CategoryID: 0

    // };
    // this.cards.push(cards);

  }

  // tslint:disable-next-line:typedef
  loadMainCategories(){
    console.log('hi ');
    const currentsession = JSON.parse(localStorage.getItem('currentsession'));
    this.categoryservice.getCategories(currentsession.Token).subscribe(response => {
      console.log(response);
      this.cards = response;
    });

  }

  // tslint:disable-next-line:typedef
  // getMainCategories(){
  //   console.log('Hi ! from get cards');
  //   this.categoryservice.getCategories(currentsession, id);
    
}




// const cards = [
//   { name : 'Driving Licence',
//     expiry : 10 - 27 - 2018,
//     details : 'Details About Document'},
//     { name : 'Driving Licence',
//     expiry : 10 - 27 - 2018,
//     details : 'Details About Document'},
//     { name : 'Driving Licence',
//     expiry : 10 - 27 - 2018,
//     details : 'Details About Document'},
//     { name : 'Driving Licence',
//     expiry : 10 - 27 - 2018,
//     details : 'Details About Document'}
// ];


// loadMainCategories()
//     {
//         var CurrentSession = JSON.parse(localStorage.getItem("currentsession"));
//         this.CurrentUser=CurrentSession.User.UserName;
//         this.CategoryServices.getCards(CurrentSession.Token,0).subscribe(
//             CategoryModel => {
                
//                 this.CategoryModel = CategoryModel;
//                 console.log(this.CategoryModel);
//                 this.CategoryCard = this.CategoryModel.Cards;               
//                 this.assignScripts();

//             },
//             (error) => {
//                 if (error == 504)
//                 {
//                     alert('Session Time Out');
//                     this.AuthenticationService.Logout();
//                 }
//             }

//         );
       
//     }