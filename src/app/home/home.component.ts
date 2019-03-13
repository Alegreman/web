import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getProjects().subscribe(projectData => {
      this.projects = projectData
      console.log(this.projects)
    });
  }

}
