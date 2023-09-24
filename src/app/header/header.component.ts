import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string ="(Bonjour from header.Component)";
  title2 : String ="Seconde title de teste pour @ViewChildren";
  title3 : String ="third title de teste pour @ViewChildren";


}
