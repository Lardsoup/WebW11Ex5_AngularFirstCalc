import { Component, OnInit, Input } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent
{
  @Input()
  result: number;

  constructor() { }

}
