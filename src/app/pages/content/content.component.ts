import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
    styleUrls: ['./content.component.css',]
})
export class ContentComponent implements OnInit {

    id: string | null;
    contentImg: string;
    contentTitle: string;
    contentText: string;

  constructor(private route: ActivatedRoute) {
    this.id = "0";
    this.contentImg = "";
    this.contentTitle = "";
    this.contentText = "";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id"));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.contentImg = result.img;
    this.contentTitle = result.title;
    this.contentText = result.text;
  }

}
