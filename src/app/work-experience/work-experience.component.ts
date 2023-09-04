import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/module';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Human Resource',
      company: 'Mplus Group Management',
      duration: 'June 2020 - Sep 2020',
      description: [
        'Worked with multiple teams to dealing with working people',
        'Worked on different techonologies such as (LOGO, Senyonet)',
      ],
    },
    {
      role: 'Developer and IT ',
      company: 'Mplus Group Management',
      duration: 'June 2021 - Oct 2021',
      description: [
        'Worked with multiple teams to develop web and desktop applications',
        'Worked on different techonologies such as (PHP, C#, Python)',
      ],
    },
    {
      role: 'Developer',
      company: 'Kupa Computer',
      duration: 'June 2022 - Oct 2022',
      description: [
        'Worked with multiple teams to develop mobile applications',
        'Worked on different techonologies such as (Swift, Flutter)',
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
}
