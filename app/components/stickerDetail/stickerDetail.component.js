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
var router_1 = require('@angular/router');
//we had declare Hero class to utilize it inside component
var StickerDetail = (function () {
    function StickerDetail() {
    }
    return StickerDetail;
}());
exports.StickerDetail = StickerDetail;
var StickerDetailComponent = (function () {
    /**
     * @todo: Create image array and it will be available to sticker-grid.html
     * After that you need to interate with *ngFor directive
     * image stucture  {
     *   imgSrc: '',
     *   altText:'sdfsdf',
     *   url: ''
     * }
     */
    function StickerDetailComponent(route) {
        this.route = route;
    }
    StickerDetailComponent.prototype.ngOnInit = function () {
        console.log("parameters", this.route.params);
    };
    StickerDetailComponent = __decorate([
        core_1.Component({
            selector: 'sticker-detail',
            //we had used back-tick to  write multiline html in order to avoid string literal errors
            // ngModel used for two way data binding
            templateUrl: 'app/components/StickerDetail/sticker-detail.html',
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], StickerDetailComponent);
    return StickerDetailComponent;
}());
exports.StickerDetailComponent = StickerDetailComponent;
//# sourceMappingURL=stickerDetail.component.js.map