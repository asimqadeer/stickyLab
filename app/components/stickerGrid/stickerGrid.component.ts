import { Component } from '@angular/core';

//we had declare Hero class to utilize it inside component
export class Stickers {
  imgSrc: string;
  url: string;
}

// Sticker list 
const STICKERS: Stickers[] = [
  { imgSrc: './images/pic01.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic02.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic03.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic04.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic05.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic06.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic07.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic08.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic09.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic10.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic11.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic12.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic13.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic14.jpg', url: 'http://www.google.com' },
  { imgSrc: './images/pic15.jpg', url: 'http://www.google.com' }
];
@Component({
  selector: 'sticker-grid',
  //we had used back-tick to  write multiline html in order to avoid string literal errors
  // ngModel used for two way data binding
  templateUrl: 'app/components/stickerGrid/sticker-grid.html',
  styleUrls:  []

		
})
export class StickerGridComponent {
  /**
   * @todo: Create image array and it will be available to sticker-grid.html
   * After that you need to interate with *ngFor directive
   * image stucture  {
   *   imgSrc: '', 
   *   altText:'sdfsdf',
   *   url: '' 
   * }
   */
  stickers =  STICKERS
 }
