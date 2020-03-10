import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ordenador',
    loadChildren: () => import('./pages/ordenador/ordenador.module').then( m => m.OrdenadorPageModule)
  },
  {
    path: 'periferico',
    loadChildren: () => import('./pages/periferico/periferico.module').then( m => m.PerifericoPageModule)
  },
  {
    path: 'movil',
    loadChildren: () => import('./pages/movil/movil.module').then( m => m.MovilPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
