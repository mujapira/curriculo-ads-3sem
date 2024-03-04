import { Component } from '@angular/core';

export interface IProject {
  title: string;
  link: string;
  description: string;
  updatedDate: string; 
  githubName: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  institutionReferenceLink:string = 'https://www.cps.sp.gov.br/fatecs/fatec-itu-dom-amaury-castanho/';
  githubReferenceLink:string = 'https://github.com/mujapira';
  
  projects: IProject[] = [];

  constructor() {
    this.projects = [
      {
        title: 'Projeto 1',
        link: 'link',
        description: 'Descrição do projeto 1',
        updatedDate: '01/01/2021',
        githubName: 'projeto1',
      },
      {
        title: 'Projeto 2',
        link: 'link',
        description: 'Descrição do projeto 2',
        updatedDate: '01/01/2021',
        githubName: 'projeto2',
      },
    ]
  }
}
