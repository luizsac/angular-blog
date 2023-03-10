import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

    @Input()
    id: string;
    @Input()
    cardImg: string;
    @Input()
    cardTitle: string;
    @Input()
    cardDescription: string;

    constructor() {
        this.id = "0";
        this.cardImg = "";
        this.cardTitle = "";
        this.cardDescription = "";
    }

  ngOnInit(): void {
  }

}
