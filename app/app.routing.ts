import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {StickerDetailComponent} from './components/stickerDetail/stickerDetail.component';
import {StickerGridComponent} from './components/stickerGrid/stickerGrid.component';

const appRoutes: Routes = [
  {
    path: 'stickerDetail/:id',
    component: StickerDetailComponent
  },
  {
      path: '',
      component: StickerGridComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);