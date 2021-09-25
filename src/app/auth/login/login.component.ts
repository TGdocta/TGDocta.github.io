import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  name:string = '';

  constructor( private router : Router ) { }

  ngOnInit(): void {
  }

  get btnDisabled():boolean {
    return this.name.length < 3 || this.name === '' ? true : false ;
  }

  logIn(){
    this.router.navigateByUrl('monsters');
    localStorage.setItem('name',this.name);
  }

}
