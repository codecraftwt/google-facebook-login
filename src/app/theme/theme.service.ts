import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme: 'light' | 'dark' = 'light';

  constructor() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    this.theme = savedTheme || 'light';
    this.setTheme(this.theme);
  }

  setTheme(theme: 'light' | 'dark') {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    document.body.className = theme;

    document.documentElement.style.setProperty('--background', theme === 'dark' ? '#333333' : '#ffffff');
    document.documentElement.style.setProperty('--text-color', theme === 'dark' ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--sidebarBg', theme === 'dark' ? '#007bff' : '#aab7cf');
    document.documentElement.style.setProperty('--sidebarText', theme === 'dark' ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--headerBg', theme === 'dark' ? '#aab7cf' : 'aliceblue');
    document.documentElement.style.setProperty('--headerText', theme === 'dark' ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--contentBg', theme === 'dark' ? '#444444' : '#ffffff');
    document.documentElement.style.setProperty('--contentText', theme === 'dark' ? '#ffffff' : '#000000');

    // Button styles
    document.documentElement.style.setProperty('--buttonBg', theme === 'dark' ? '#444444' : '#007bff');
    document.documentElement.style.setProperty('--buttonText', '#ffffff');
    document.documentElement.style.setProperty('--buttonHoverBg', theme === 'dark' ? '#333333' : '#0056b3');
    document.documentElement.style.setProperty('--buttonHoverText', '#ffffff');

    // Save and cancel button styles (if distinct from main button)
    document.documentElement.style.setProperty('--saveButtonBg', theme === 'dark' ? '#3d5af1' : '#28a745');
    document.documentElement.style.setProperty('--saveButtonHoverBg', theme === 'dark' ? '#19692c' : '#218838');
    document.documentElement.style.setProperty('--cancelButtonBg', theme === 'dark' ? '#28a745' : '#dc3545');
    document.documentElement.style.setProperty('--cancelButtonHoverBg', theme === 'dark' ? '#721c24' : '#c82333');
  }

  getTheme() {
    return this.theme;
  }
}
