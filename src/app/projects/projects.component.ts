import { Component, OnInit } from '@angular/core';
import { Project } from '../models/module';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  certificateList: Project[] = [
    {
      title: 'Akbank Machine Learning 101',
      content: 'Machine Learning With Python.'
    },
    {
      title: 'IOS Programming By Swift',
      content: 'Designing a project with Swift.'
    },
    {
      title: 'Agile And Scrum Education',
      content: 'How Agile Software Groups Work.'
    },
    {
      title: 'Web Designing With HTML And CSS',
      content: 'Designing the front of the web page with HTML and CSS'
    },
  ];
  constructor() { }

  ngOnInit(): void {
    
  }
}
