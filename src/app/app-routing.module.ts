import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MainView2Component } from './main-view2/main-view2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-view/home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'main-view', loadChildren: () => import('./main-view/main-view.module').then(m => m.MainViewModule) },
  { path: 'main-view2', component: MainView2Component, data: { text: 'Main View #2' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
