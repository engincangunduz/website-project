import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/module';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name:'Python',
      level: 'Upper-Intermediate',
      rating: 80,
    },
    {
      name: 'Java',
      level: 'Upper-Intermediate',
      rating: 70
    },
    {
      name: 'Swift',
      level: 'Upper-Intermediate',
      rating: 70
    },
    {
      name: 'Flutter',
      level: 'Intermediate',
      rating: 50
    },
    {
      name: 'Angular',
      level: 'Intermediate',
      rating: 50
    },
    {
      name: 'HTML, CSS, TypeScript',
      level: 'Intermediate',
      rating: 50
    },
  ];
  constructor() { }

  ngOnInit(): void {
    
  }
}
