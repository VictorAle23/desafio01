import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor() {}
  cambiar(): void {
    const toggleBtn = document.querySelector('.toggle-btn') as HTMLElement;
    const closeBtn = document.querySelector('.close-btn') as HTMLElement;
    const sidebar = document.querySelector('.sidebar') as HTMLElement;

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('show');
    });
  }
}
