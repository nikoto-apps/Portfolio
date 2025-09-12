import { Component } from '@angular/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  template: `
    <h2 class="text-6xl sm:text-4xl uppercase font-bodoni font-bold text-center mb-16 text-white">Mes technos</h2>

    <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4">
      @for (icone of icones; track $index) {
        <li class="bg-white border border-gray-700 rounded-xl shadow-lg p-6 flex items-center justify-center text-white text-lg font-semibold hover:scale-105 transition-transform duration-300 ease-in-out">
          <img class="" [alt]="icone.name" [src]="icone.bgImg">
        </li>
      }
    </ul>
  `,
  styles: ``
})
export class StackComponent {
  icones = [
    { name: 'Angular', bgImg: "assets/images/Angular.png"},
    { name: 'Spring Boot', bgImg: "assets/images/SpringBoot.png"},
    { name: 'Java', bgImg:"assets/images/Java.png" },
    { name: 'PostgreSQL', bgImg:"assets/images/PostgreSQL.png" },
    { name: 'Docker', bgImg:"assets/images/Docker.png" },
    { name: 'Git', bgImg:"assets/images/Git.png" },
    { name: 'Jira', bgImg:"assets/images/Jira.jpeg" },
    { name: 'SCRUM', bgImg:"assets/images/Scrum.png" }
  ];
}