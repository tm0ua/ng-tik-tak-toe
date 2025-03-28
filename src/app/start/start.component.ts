import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './start.component.html',
  styleUrl: './start.component.less'
})
export class StartComponent {

}
