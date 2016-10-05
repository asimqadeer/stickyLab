"use strict";
var router_1 = require('@angular/router');
var stickerDetail_component_1 = require('./components/stickerDetail/stickerDetail.component');
var stickerGrid_component_1 = require('./components/stickerGrid/stickerGrid.component');
var stickerUpload_component_1 = require('./components/stickerUpload/stickerUpload.component');
var appRoutes = [
    {
        path: 'stickerUpload',
        component: stickerUpload_component_1.StickerUploadComponent
    },
    {
        path: 'stickerDetail/:id',
        component: stickerDetail_component_1.StickerDetailComponent
    },
    {
        path: '',
        component: stickerGrid_component_1.StickerGridComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map