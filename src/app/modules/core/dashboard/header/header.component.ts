import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loading: boolean = false;

  constructor( private router: Router,){

  }

  cerrar(){
    this.loading = true;

    setTimeout(() => {
        this.loading = false
        sessionStorage.removeItem('accessToken');
        this.router.navigate(['']);
    }, 1000);
  }

  inicio(){
        this.router.navigate(['']);
  }
}
