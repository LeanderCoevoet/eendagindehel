import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  PR2018 = new Date(2018, 3, 8);

  constructor() { }

  ngOnInit() {
  }

}
