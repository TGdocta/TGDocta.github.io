import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path:string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get myPath() {
    return this.router.url === '/login' ? true : false
  }

  logout(){
    this.router.navigateByUrl('');
    localStorage.clear()
  }

}
