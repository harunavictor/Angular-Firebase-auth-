import { Component } from '@angular/core';
import { AngularFireDatabase, } from '@angular/fire/database';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$;
  courses:any[];
  subscription:Subscription
  constructor(db:AngularFireDatabase){
    this.courses$ = db.list('/courses');
   // db.list('/courses').valueChanges().subscribe(courses=>{
     //this.courses=courses;
     //console.log(this.courses);
   //});
  }
}
