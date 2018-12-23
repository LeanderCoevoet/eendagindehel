import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  PR2019 = new Date(2019, 3, 14);

  constructor() { }

  ngOnInit() {
  }

}
