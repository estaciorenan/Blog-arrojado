import { Component, Input, OnInit } from '@angular/core';
import { IdataMain } from 'src/app/interface/dataMain';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input() dataSmall: any | undefined;

  photo: string = "";
  title: string = "";
  description: string = "";

  ngOnInit(): void {
    this.pegarParams()
  }

  pegarParams() {
    this.photo = this.dataSmall.photoCover;
    this.title = this.dataSmall.cardTitle;
    this.description = this.dataSmall.cardDescription
  }

}
