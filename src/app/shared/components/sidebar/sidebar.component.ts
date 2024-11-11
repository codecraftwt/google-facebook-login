import { Component } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  FaDashboard = faGoogle
}
