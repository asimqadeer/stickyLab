import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  //we had used back-tick to  write multiline html in order to avoid string literal errors
  // ngModel used for two way data binding
  	template: `
	  <base href="/">
	  <router-outlet></router-outlet>
	`,
		
})
export class AppComponent {
 
 }
