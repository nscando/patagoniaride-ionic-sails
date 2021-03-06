import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'rides',
    loadChildren: () =>
      import('./rides/rides.module').then((m) => m.RidesPageModule),
  },
  {
    path: 'ride-form/:id',
    loadChildren: () =>
      import('./ride-form/ride-form.module').then((m) => m.RideFormPageModule),
  },
  {
    path: 'ride/:id',
    loadChildren: () =>
      import('./ride/ride.module').then((m) => m.RidePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
