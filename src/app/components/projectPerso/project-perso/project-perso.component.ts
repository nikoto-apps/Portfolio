import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-project-perso',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="projectsPerso"
      class="text-black py-20 px-6 flex justify-center"
    >
      <div class="max-w-6xl w-full">
        <h2 class="text-6xl sm:text-4xl uppercase font-bold font-bodoni text-center mb-16 text-white">
          Projets Personnels
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          @for(project of projects; track $index) {
            <div class="bg-gray-800 bg-opacity-10 rounded-xl shadow-lg p-6 animate-slide-in flex flex-col">
              
             
              <h3 class="text-2xl font-bold text-white mb-2">{{ project?.title }}</h3>
              
             
              <p class="text-sm text-white italic mb-4 text-justify">
                {{ project?.desc }}
              </p>
              
            
              <div >
                <video 
                  [src]="project?.video" 
                  controls 
                  class="w-full h-full rounded-lg shadow-md object-contain">
                </video>
              </div>

              
              <ul class="flex mt-5 flex-wrap gap-3 mb-6">
                @for(tech of project?.stack; track $index) {
                  <li [ngClass]="[tech.bgColor, 'text-white', 'text-sm', 'px-3', 'py-1', 'rounded-full', 'shadow-md']">
                    {{ tech.name }}
                  </li>
                }
              </ul>
              <a
                [href]="project?.href"
                target="_blank"
                class="mt-auto bg-[#6e40c9] hover:bg-[#5a2bb7] text-white font-semibold text-center px-5 py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Voir sur GitHub
              </a>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-slide-in {
      animation: slideIn 0.8s ease-out both;
    }
  `],
})
export class ProjectPersoComponent {
  projects = [
    {
      title: 'Mini CRM',
      video: 'assets/video/video_CrmPro.mp4',
      desc: `Cette application est un CRM permettant à chaque utilisateur de gérer ses contacts et ses commandes de manière sécurisée.
Elle est construite en Full Stack avec un frontend Angular et un backend Spring Boot, communiquant via une API REST sécurisée par JWT stocké dans des cookies.`,
      href: 'https://github.com/NikotoKoto/CrmPro.git',
      stack: [
        { name: 'Angular', bgColor: 'bg-red-600' },
        { name: 'Java', bgColor: 'bg-[#007396]' },
        { name: 'Spring Boot', bgColor: 'bg-green-600' },
        { name: 'PostgreSQL', bgColor: 'bg-sky-700' },
        { name: 'JUnit', bgColor: 'bg-lime-600' }
      ]
    },
    {
      title: 'Cocktails',
      video: 'assets/video/video_AngularCocktail.mp4',
      desc:`Cette application de cocktails, développée avec une API public, illustre l’utilisation d’une API en mode CRUD. Elle permet aux utilisateurs de parcourir les recettes, d’ajouter leurs cocktails favoris à un panier, et inclut également un espace administrateur dédié à la gestion des cocktails.`,
      href:'https://github.com/NikotoKoto/ProjectAngular.git',
      stack: [
        { name: 'Angular', bgColor: 'bg-red-600' },
        {name: 'API', bgColor:'bg-slate-500'}
      ]
    },
    {
      title:"TodoList Fullstack",
      video:'assets/video/video_TodolistFullStack.mp4',
      desc:`Ce projet est une application Full Stack de gestion de tâches (TodoList). Elle permet de créer, afficher, modifier et supprimer des tâches.
L’application repose sur un frontend Angular et un backend Spring Boot exposant une API REST, avec une base de données PostgreSQL pour stocker les données.`,
     href:'https://github.com/NikotoKoto/TodoList-Fullstack.git',
     stack: [
      { name: 'Angular', bgColor: 'bg-red-600' },
      { name: 'Java', bgColor: 'bg-[#007396]' },
      { name: 'Spring Boot', bgColor: 'bg-green-600' },
      { name: 'PostgreSQL', bgColor: 'bg-sky-700' },
     ]
    },
    {
      title: "CookChef",
      video:'assets/video/video_CookChef.mp4',
      desc:`CookChef est une application web conçue pour permettre aux amateurs de cuisine de découvrir, créer et gérer leurs recettes préférées. Les utilisateurs peuvent se connecter pour ajouter de nouvelles recettes, modifier, supprimer des recettes et conserver une liste de leurs plats préférés.`,
      href:'https://github.com/NikotoKoto/CookChef',
      stack:[
        {
          name: "React",
          bgColor: 'bg-[#61DAFB]'
        },
        {
          name: 'API',
          bgColor:'bg-slate-500'
        }
      ]
    },
    
    {
      title: "Product",
      video:'assets/video/Desserts.mp4',
      desc:`Products est une application web conçue pour permettre d'ajouter un produit dans un panier en choisissant les quantités avec un panier reactif. Les datas ne sont pas persistés mais en brut dans le code.`,
      href:'https://github.com/NikotoKoto/Product',
      stack:[
        {
          name: "Angular",
          bgColor: 'bg-red-600'
        },
        
      ]
    }
  ];
}