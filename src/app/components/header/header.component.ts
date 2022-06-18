import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  page!: number;
  constructor(private router: Router) {}

  ngOnInit(): void {
    let url = this.router.url;
    if (url === '/home') {
      this.page = 0;
    } else if (url === '/agotados') {
      this.page = 1;
    } else if ((url = '/about')) {
      this.page = 2;
    }
  }
}
