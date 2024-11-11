import { Component } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/theme/theme.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  FaMoon = faMoon;
  FaSun = faLightbulb;
  constructor(public themeService: ThemeService) { }

  toggleTheme() {
    const newTheme = this.themeService.getTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }
}
