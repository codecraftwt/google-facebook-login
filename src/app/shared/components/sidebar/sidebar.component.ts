import { Component } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  FaDashboard = faGoogle;
  FaProductHunt = faProductHunt;
  FaJediOrder = faJediOrder;
  FaSquarePollVertical = faSquarePollVertical;
  FaMagnifyingGlassChart = faMagnifyingGlassChart;
  FaRightFromBracket = faRightFromBracket;
}
