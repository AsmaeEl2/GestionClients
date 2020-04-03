import { Injectable } from '@angular/core';
import { Client } from './model/client';
import { LIST_CLIENTS } from './shared/list-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getListClients(): Client[] {
    return LIST_CLIENTS;
  }
}
