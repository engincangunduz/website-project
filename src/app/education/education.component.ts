import { Component, OnInit } from '@angular/core';
import { Education } from '../models/module';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educationList: Education[] = [{
    institude: 'Kazlicesme Abay Middle School',
    duration: '2013-2015',
    average: '95',
    score: '100%'
  },
  {
    institude: 'Bakirkoy Anatolian High School',
    duration: '2015-2019',
    average: '90',
    score: '100%'
  },
  {
    institude: 'Halic University',
    duration: '2020-',
    average: '3.13',
    score: '60%'
  },
];
  constructor() { }

  ngOnInit(): void {
    
  }
}
