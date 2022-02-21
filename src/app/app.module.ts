import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IgxIconModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxDatePickerModule, IgxInputGroupModule, IgxSelectModule, IgxGridModule, IgxCardModule, IgxChipsModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MyInfoComponent } from './my-info/my-info.component';
import { WahooComponent } from './wahoo/wahoo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyInfoComponent,
    WahooComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
