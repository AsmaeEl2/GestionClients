import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  utilisateur: Utilisateur = null

  constructor( private router: Router) { }

  ngOnInit() {
    this.utilisateur = {
      nom:'admin',
      motdepasse:	'password'
    }
  }

  onSubmit(): void {
    this.router.navigate(['/clients'])
  }

}
