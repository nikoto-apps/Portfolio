import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div
      class="relative min-h-screen px-4 py-10 flex flex-col items-center justify-center text-white"
    >
    <div
        class="absolute top-4 left-0 right-0 flex flex-wrap justify-center gap-4 sm:gap-8 text-lg sm:text-xl px-4"
      >
        @for (s of socials; track $index) {
          <a
            [href]="s.url"
            class="hover:text-blue-300 transition"
            [attr.download]="s.download ? s.filename : null"
            [attr.target]="s.download ? null : '_blank'"
          >
            {{ s.icon }} {{ s.name }}
          </a>
        }
      </div>

      <h1
        class="mt-16 sm:mt-20 text-4xl sm:text-6xl md:text-8xl font-bold uppercase tracking-wide text-center drop-shadow mb-10 font-bodoni"
      >
        Nicolas Floris
      </h1>

      <div class="grid grid-cols-12 gap-8 w-full max-w-7xl">
        <div
          class="col-span-12 md:col-span-5 bg-white/10 p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-white"
        >
          <img
            src="assets/images/NicolasFloris.jpg"
            alt="Nicolas Floris"
            class="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full border-4 border-white shadow-md mb-6"
          />
          <p class="text-lg leading-relaxed text-justify">
            Je m'appelle Nicolas Floris, j'ai 29 ans.
            Fraîchement diplômé d’un
            <strong>Master Développeur Manager Full Stack</strong> à
            l'<strong>EFREI</strong>, je suis à la recherche d'une
            opportunité en tant que développeur full stack junior
            <strong>AngularJS / Java</strong>, dans un environnement dynamique
            où je pourrai mettre à profit mes compétences et continuer à
            apprendre auprès d’une équipe expérimentée. <br /><br />
            
          </p>
          
        </div>

        <ul
          class="col-span-12 md:col-span-7 flex flex-wrap justify-center items-center gap-6"
        >
          @for (n of nav; track $index) {
          <li>
            <a
              [href]="n.href"
              class="block w-52 h-36 sm:w-64 sm:h-40 bg-cover bg-center rounded-xl shadow-xl overflow-hidden relative group transition-transform duration-300 hover:scale-105"
              [style]="{ 'background-image': 'url(' + ')' }"
            >
              <div
                class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300"
              ></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span
                  class="text-white font-bodoni uppercase text-xl font-semibold drop-shadow-md text-center"
                >
                  {{ n.name }}
                </span>
              </div>
            </a>
          </li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  nav = [
    {
      href: '#about',
      name: 'Mon parcours',
    },
    {
      href: '#Stack',
      name: 'Mes technos'
    },
    {
      href: '#projectsPro',
      name: 'Mes projets pro',
    },
    {
      href: '#projectsPerso',
      name: 'Mes projets perso',
    },
  ];

  socials = [
    {
      name: 'Github',
      url: 'https://github.com/NikotoKoto',
      icon: '🐙',
      download: false,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nicolas-floris/',
      icon: '💼',
      download: false,
    },
    {
      name: 'Mon CV',
      url: 'assets/docs/CV_NicolasFloris_2025.pdf',
      icon: '📄',
      download: true,
      filename: 'CV_Nicolas_Floris.pdf',
    },
    {
      name: 'Ma Lettre de motivation',
      url: 'assets/docs/Lettre_de_Motivation_Nicolas_Floris.pdf',
      icon: '📝',
      download: true,
      filename: 'Lettre_Motivation_Nicolas_Floris.pdf',
    },
  ];

}
