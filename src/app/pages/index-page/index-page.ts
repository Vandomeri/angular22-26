import { Component } from '@angular/core';
import { Collapse } from "../../components/collapse/collapse";
import { CurrencyPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-index-page',
  imports: [Collapse, UpperCasePipe, CurrencyPipe, DatePipe, JsonPipe],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
})
export class IndexPage {

  now = Date.now()

  obj = {
    id: 1,
    name: 'Ivan'
  }

}
