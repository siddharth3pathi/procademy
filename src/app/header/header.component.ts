import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  source : string = "https://img.freepik.com/free-vector/newsstand-concept-illustration_114360-12509.jpg?w=1380&t=st=1683540824~exp=1683541424~hmac=d54a4f9b3fae67891d4b6db897a68233fb4fb566fe3e52cba134c590bbaecd85";
  slogan : string = "Your one stop shop for everything.";

}
