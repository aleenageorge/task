import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  getDisplay() {
    // get from local storage
    const hey = localStorage.getItem('username');

    return hey;
  }
  constructor() { }
}
