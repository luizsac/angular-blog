import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

    @Input()
    id: string;
    @Input()
    cardImg: string;
    @Input()
    cardTitle: string;

  constructor() {
    this.id = "0";
    this.cardImg = "";
    this.cardTitle = "";
  }

  ngOnInit(): void {
  }

}
