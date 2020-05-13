import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projectList: Project[] = [
    { projectName: 'project1' },
    { projectName: 'project2' },
    { projectName: 'project3' },
    { projectName: 'project4' },
    { projectName: 'project5' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
