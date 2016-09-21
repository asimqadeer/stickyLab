import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

//we had declare Hero class to utilize it inside component
export class StickerDetail {
}


@Component({
  selector: 'sticker-detail',
  //we had used back-tick to  write multiline html in order to avoid string literal errors
  // ngModel used for two way data binding
  templateUrl: 'app/components/StickerDetail/sticker-detail.html',
  styleUrls:  []

		
})
export class StickerDetailComponent implements OnInit {
  /**
   * @todo: Create image array and it will be available to sticker-grid.html
   * After that you need to interate with *ngFor directive
   * image stucture  {
   *   imgSrc: '', 
   *   altText:'sdfsdf',
   *   url: '' 
   * }
   */
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      console.log("parameters", this.route.params);
      
  }

 }
