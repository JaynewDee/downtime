import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private navService: NavService) {}

  async ngOnInit() {
    await this.navService.getHome();
  }
}
