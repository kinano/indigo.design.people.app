import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-wahoo',
  templateUrl: './wahoo.component.html',
  styleUrls: ['./wahoo.component.scss']
})
export class WahooComponent implements OnInit {
  public northwindCategories: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Categories').subscribe(data => this.northwindCategories = data);
  }
}
