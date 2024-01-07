import { Component, OnInit } from '@angular/core';
import data from '../../data/mydata.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  id: string | null = null;
  title: string = "";
  image: string = "";
  description: string = "";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParam();
    this.getDataBlog();
  }

  getParam() {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("Id")
    })
  }

  getDataBlog() {

    const filtroData = data.filter((f) => f.id == this.id)
    filtroData.map((m) => {
      this.title = m.cardTitle;
      this.image = m.photoCover
      this.description = m.cardDescription
    })
  }

}
