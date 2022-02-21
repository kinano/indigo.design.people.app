import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';
import { MainViewComponent } from './main-view.component';
import { HomeComponent } from './home/home.component';
import { IgxIconModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxDatePickerModule, IgxInputGroupModule, IgxSelectModule, IgxGridModule, IgxCardModule, IgxChipsModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MyInfoComponent } from './my-info/my-info.component';
import { WahooComponent } from './wahoo/wahoo.component';

@NgModule({
  declarations: [
    MainViewComponent,
    HomeComponent,
    MyInfoComponent,
    WahooComponent
  ],
  imports: [
    CommonModule,
    MainViewRoutingModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxListModule,
    IgxDatePickerModule,
    IgxInputGroupModule,
    FormsModule,
    IgxSelectModule,
    IgxGridModule,
    IgxCardModule,
    IgxChipsModule
  ]
})
export class MainViewModule {
}
