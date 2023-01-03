import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

export interface GridElement {
  name: string;
  gender: string;
  age: number;
  skills: string;
}
const ELEMENT_DATA: GridElement[] = [
  {
    name: 'Ram',
    gender: 'Male',
    age: 21,
    skills: '',
  },
  { name: 'Nagarjuna', gender: 'Male', age: 23, skills: '' },
  { name: 'Venkatesh', gender: 'Male', age: 24, skills: '' },
  { name: 'Bala Krishna', gender: 'Male', age: 21, skills: '' },
  { name: 'Sri devi', gender: 'Female', age: 22, skills: '' },
  { name: 'Ramarao', gender: 'Male', age: 22, skills: '' },
  { name: 'Surya', gender: 'Male', age: 21, skills: '' },
  { name: 'karthi', gender: 'Male', age: 23, skills: '' },
  { name: 'vijaya', gender: 'Female', age: 22, skills: '' },
];

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})
export class GridListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'gender', 'skills'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor(private http: HttpClient) {}
  SkillList: string[] = [
    'ReactJs',
    'Angular',
    'DotNet',
    'Python',
    'SQL',
    'DevOps',
  ];

  starData(value: any, element: any) {
    console.log('selected value', value);
    console.log('selected element', element);
    element.skills = value;
  }
  ngOnInit() {}
}
// getData() {
//   const url = 'https://mocki.io/v1/6aaced4b-01dc-4c5b-a401-4e58a10ee8c7';
//   this.http.get(url).subscribe((res) => {
//     this.SkillList = res;
//     console.log(this.SkillList);
//   });
// }
