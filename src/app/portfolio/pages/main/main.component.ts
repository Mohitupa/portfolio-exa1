import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  h2 = '<h2>'
  h20 = '</h2>'

  h3 = '<h3>'
  h30 = '</h3>'

  span = '<span>'
  span0 = '</span>'

  constructor() { }

  ngOnInit(): void {
  }

}
