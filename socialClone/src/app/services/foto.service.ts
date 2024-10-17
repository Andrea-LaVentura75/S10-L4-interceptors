import { UtenteImg } from './../interfaces/utente-img';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FotoService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  subLike$ = new Subject<number>();

  constructor(private http: HttpClient) {}

  getAllFoto(): Observable<UtenteImg[]> {
    return this.http.get<UtenteImg[]>(this.apiUrl);
  }
  addToLike(foto: number) {
    this.subLike$.next(foto);
  }
}
