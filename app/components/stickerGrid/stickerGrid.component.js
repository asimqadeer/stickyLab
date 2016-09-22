"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//we had declare Hero class to utilize it inside component
var Stickers = (function () {
    function Stickers() {
    }
    return Stickers;
}());
exports.Stickers = Stickers;
// Sticker list 
var STICKERS = [
    { imgSrc: './images/pic01.jpg', url: '/stickerDetail/1' },
    { imgSrc: './images/pic02.jpg', url: '/stickerDetail/2' },
    { imgSrc: './images/pic03.jpg', url: '/stickerDetail/3' },
    { imgSrc: './images/pic04.jpg', url: '/stickerDetail/4' },
    { imgSrc: './images/pic05.jpg', url: '/stickerDetail/5' },
    { imgSrc: './images/pic06.jpg', url: '/stickerDetail/6' },
    { imgSrc: './images/pic07.jpg', url: '/stickerDetail/7' },
    { imgSrc: './images/pic08.jpg', url: '/stickerDetail/8' },
    { imgSrc: './images/pic09.jpg', url: '/stickerDetail/9' },
    { imgSrc: './images/pic10.jpg', url: '/stickerDetail/10' },
    { imgSrc: './images/pic11.jpg', url: '/stickerDetail/11' },
    { imgSrc: './images/pic12.jpg', url: '/stickerDetail/12' },
    { imgSrc: './images/pic13.jpg', url: '/stickerDetail/13' },
    { imgSrc: './images/pic14.jpg', url: '/stickerDetail/14' },
    { imgSrc: './images/pic15.jpg', url: '/stickerDetail/15' }
];
var StickerGridComponent = (function () {
    function StickerGridComponent() {
        /**
         * @todo: Create image array and it will be available to sticker-grid.html
         * After that you need to interate with *ngFor directive
         * image stucture  {
         *   imgSrc: '',
         *   altText:'sdfsdf',
         *   url: ''
         * }
         */
        this.stickers = STICKERS;
    }
    StickerGridComponent = __decorate([
        core_1.Component({
            selector: 'sticker-grid',
            //we had used back-tick to  write multiline html in order to avoid string literal errors
            // ngModel used for two way data binding
            templateUrl: 'app/components/stickerGrid/sticker-grid.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [])
    ], StickerGridComponent);
    return StickerGridComponent;
}());
exports.StickerGridComponent = StickerGridComponent;
//# sourceMappingURL=stickerGrid.component.js.map