import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//we had declare Hero class to utilize it inside component
export class StickerDetail {
  id: number;
  imgUrl: string;
  heading: string;
  imgTxt: string;
}

// Sticker Detail 
const STICKERSDTL: StickerDetail[] = [
  {id:1, imgUrl: './images/pic01.jpg', heading:'Adventure Time - Jake Stickers', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:2, imgUrl: './images/pic02.jpg', heading:'Happy New Year', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:3, imgUrl: './images/pic03.jpg', heading:'Cartoon rabbit iphone 6 Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:4, imgUrl: './images/pic04.jpg', heading:'Happy Thanksgiving', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:5, imgUrl: './images/pic05.jpg', heading:'Abstract Cute Bowknot iphone 5 Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:6, imgUrl: './images/pic06.jpg', heading:'Happy Halloween Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:7, imgUrl: './images/pic07.jpg', heading:'Funny skull iPhone 6 Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:8, imgUrl: './images/pic08.jpg', heading:'Doraemon Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:9, imgUrl: './images/pic09.jpg', heading:'Cool iPhone 6 Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:10, imgUrl: './images/pic10.jpg', heading:'Merry Christmas Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:11, imgUrl: './images/pic11.jpg', heading:'Cute HelloKitty Girly Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:12, imgUrl: './images/pic12.jpg', heading:'Anime Cute Girl iPhone 6 Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:13, imgUrl: './images/pic13.jpg', heading:'Happy Easter Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:14, imgUrl: './images/pic14.jpg', heading:'Cool Pop Art Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' },
  {id:15, imgUrl: './images/pic15.jpg', heading:'Angry Birds Sticker', imgTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt ex sit amet sem commodo, vitae ultrices lorem molestie. Praesent porttitor commodo gravida. Mauris eget tincidunt arcu. Sed id nunc sit amet dui imperdiet euismod a eu nulla.' }
];

var stickerID = 1;

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
  constructor(private route: ActivatedRoute, private router: Router) {}

  stickerDetail = STICKERSDTL
  data = null
 
  ngOnInit(): void {
    
      stickerID = +this.route.snapshot.params['id']; 
      this.data =  this.stickerDetail.find(this.itemFinder);
      console.log("fetch object", this.data);
  }
  
  itemFinder(item){
     return item.id === stickerID
  }

 }
