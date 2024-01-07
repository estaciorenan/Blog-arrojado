import { Component, Input, OnInit } from '@angular/core';
import { IdataMain } from 'src/app/interface/dataMain';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() dataMain: Array<IdataMain> | undefined;

  id: string | undefined = undefined;
  photoCover: string = "";
  cardTitle: string = "";
  cardDescription: string = "";

  ngOnInit(): void {
    this.pegarParams()
  }

  pegarParams() {
    this.dataMain?.map((m) => {
      this.photoCover = m.photoCover;
      this.cardTitle = m.cardTitle;
      this.cardDescription = m.cardDescription
      this.id = m.id
    })
  }

}
