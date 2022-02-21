import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view.component';
import { HomeComponent } from './home/home.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { WahooComponent } from './wahoo/wahoo.component';

const routes: Routes = [{ path: '', component: MainViewComponent, children: [{ path: '', redirectTo: 'home', pathMatch: 'full' }, { path: 'home', component: HomeComponent, data: { text: 'Home' } }, { path: 'my-info', component: MyInfoComponent, data: { text: 'My Info' } }, { path: 'wahoo', component: WahooComponent, data: { text: 'Wahoo' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainViewRoutingModule {
}
