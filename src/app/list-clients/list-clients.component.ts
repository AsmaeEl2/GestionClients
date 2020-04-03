import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public clientSelected: Client = {
    id: 0,
    nom: '',
    prenom: '',
    adresse: ''
  }
  
  public clients: Client[]
  
  constructor(private clientService: ClientsService) { }

  ngOnInit() {
    this.clients = this.clientService.getListClients();
  }


  selectedItem(item: Client): void {
    this.clientSelected = item;

  }
}
