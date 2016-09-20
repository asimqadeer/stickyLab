import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
            <h2>{{courseTitle}}</h2>
            <div>this is course title</div>
           <input [(ngModel)] = "courseTitle" />
           <button (click)="calculate(courseTitle)" >Click me</button>
   `,
   styleUrls: [

   ]
})


export class CourseComponent {
  courseTitle = "Course-101";
  //declare function and bind it to the template 
  calculate(courseTitle) : void{
      console.log("i am clicked!!",courseTitle);
  }
}