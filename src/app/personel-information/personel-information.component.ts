import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personel-information',
  templateUrl: './personel-information.component.html',
  styleUrls: ['./personel-information.component.css']
})
export class PersonelInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Engincan Gündüz'],
    ['Age', '22'],
    ['Education Year  ', '4 Years'],
    ['Education', 'Halic University'],
    ['Nationality', 'Turkey']
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer student with 4 years of in Halic University. Currently, working as intern in Senkron Tech.',
    'I work with web programming in internship, but my field of interest is mobile programming. So I am more interested with Swift.',
    'Besides that, I have a few projects that I have developed for image processing in Python in my spare time.',
    'Always eager to learn new technologies. Delivered all project withing deadlines.',
    'Currently, working as intern in Senkron Tech.'
  ];


  constructor() {}

  ngOnInit(): void {}
}
