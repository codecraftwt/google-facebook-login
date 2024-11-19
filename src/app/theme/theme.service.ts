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

    document.documentElement.style.setProperty('--background', theme === 'dark' ? '#1e334c' : '#edf2f9');
    document.documentElement.style.setProperty('--text-color', theme === 'dark' ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--sidebarBg', theme === 'dark' ? '#121e2d' : '#edf2f9');
    document.documentElement.style.setProperty('--sidebarText', theme === 'dark' ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--headerBg', theme === 'dark' ? '#0b1727' : '#aab7cf');
    document.documentElement.style.setProperty('--headerText', theme === 'dark' ? '#ffffff' : '#000000');
    document.documentElement.style.setProperty('--contentBg', theme === 'dark' ? '#1e334c' : '#edf2f9');
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

    // Card and Cardbody styles 
    document.documentElement.style.setProperty('--cardBg', theme === 'dark' ? '#121e2d' : '#ffffff');
    document.documentElement.style.setProperty('--cardText', theme === 'dark' ? '#ffffff' : '#333333');
    document.documentElement.style.setProperty('--cardbodyBg', theme === 'dark' ? '#121e2d' : '#ffffff');
    document.documentElement.style.setProperty('--cardbodyText', theme === 'dark' ? '#ffffff' : '#333333');

    // Child Card and Cardbody styles 
    document.documentElement.style.setProperty('--childcardBg', theme === 'dark' ? '#1d324c' : '#ffffff');
    document.documentElement.style.setProperty('--childcardText', theme === 'dark' ? '#ffffff' : '#333333');
    document.documentElement.style.setProperty('--childcardBorder', theme === 'dark' ? '#ffffff' : 'rgb(0,0,0,0.17)');
    document.documentElement.style.setProperty('--childcardbodyBg', theme === 'dark' ? '#1d324c' : '#ffffff');
    document.documentElement.style.setProperty('--childcardbodyText', theme === 'dark' ? '#ffffff' : '#333333');

    // table styles
    document.documentElement.style.setProperty('--tableBg', theme === 'dark' ? '#1d324c' : '#ffffff');
    document.documentElement.style.setProperty('--tableText', theme === 'dark' ? '#ffffff' : '#333333');
  }

  getTheme() {
    return this.theme;
  }
}
