import { Component, OnInit } from '@angular/core';
import { AppSizeStateService } from 'src/app/core';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss']
})
export class OrderContainerComponent implements OnInit {

  constructor(
    public appSize: AppSizeStateService
  ) { }

  ngOnInit() {
  }

}
