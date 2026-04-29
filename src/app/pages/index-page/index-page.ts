import { Component } from '@angular/core';
import { Collapse } from "../../components/collapse/collapse";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Consoler } from '../../directives/consoler';
import { Contrast } from '../../directives/contrast';

@Component({
  selector: 'app-index-page',
  imports: [Collapse, UpperCasePipe, CurrencyPipe, DatePipe, Consoler, Contrast],
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
