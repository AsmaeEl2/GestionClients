import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListClientsComponent } from './list-clients/list-clients.component';


const routes: Routes = [
  {path: 'authentification', component: LoginComponent},
  {path: 'clients', component: ListClientsComponent},
  {path: '', redirectTo: 'authentification', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
