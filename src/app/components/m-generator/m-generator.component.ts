import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-m-generator',
  templateUrl: './m-generator.component.html',
  styleUrls: ['./m-generator.component.css']
})
export class MGeneratorComponent implements OnInit {

  text: string;

  constructor() {
  }

  ngOnInit() {
    this.text = 'RV';
  }

}
