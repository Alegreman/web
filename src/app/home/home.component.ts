import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { PROJECTS } from "../mocks/projects_demo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects:Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.projects = PROJECTS;
    
  }

}
