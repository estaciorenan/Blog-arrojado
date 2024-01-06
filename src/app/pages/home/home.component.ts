import { Component, OnInit } from '@angular/core';
import data from '../../data/mydata.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    this.getCardMain();
    this.getCardSmall();
  }

  getCardMain() {
    const dataMain = data.filter((f) => f.main === true)
    return dataMain
  }

  getCardSmall() {
    const dataMain = data.filter((f) => f.main === false)
    return dataMain
  }
}
