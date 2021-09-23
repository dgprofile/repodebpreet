import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
// typical import
import gsap from "gsap";
// or get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'digital';
  allcourses: any[]=[];
  @ViewChild('random', { static: false }) random: ElementRef;  
  //constructor(db: AngularFirestore){
    //  db
    //   .collection("/courses")
    //   .get()
    //   .subscribe((ss) => {
    //     ss.docs.forEach((doc) => {
    //       this.allcourses.push(doc.data());
    //     });
    //   }); 
    //db.collection("/courses").valueChanges();
  //}
  items:any;
  
  constructor(db: AngularFireDatabase, private rend: Renderer2){
    // db.list("courses").snapshotChanges().subscribe(courses=>{
    //   console.log(courses);
    //   this.allcourses = courses;
    // });
    this.items = db.list("courses").valueChanges().subscribe(courses=>{
        console.log(courses);
        this.allcourses = courses;
      });
      
    //animation  
    gsap.from(".feature-body", {x: -200});
  }

  ngAfterViewInit(): void {
    var random= Math.floor(Math.random() * 6) + 0;
    // var bigSize = ["url('https://images.pexels.com/photos/7675004/pexels-photo-7675004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    //                "url('https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    //                "url('https://images.pexels.com/photos/7191989/pexels-photo-7191989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    //                "url('https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    //                "url('https://images.pexels.com/photos/7695336/pexels-photo-7695336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
    //                "url('https://images.pexels.com/photos/7148029/pexels-photo-7148029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
    //               ];
    // console.log(bigSize[random]);
    // this.rend.setStyle(
    //   this.random.nativeElement,
    //   'background-image',
    //   bigSize[random]
    // );  
    gsap.from(".feature-body", {duration: 2, opacity: 0, delay: 0.9});
  }
  
  
 
}
