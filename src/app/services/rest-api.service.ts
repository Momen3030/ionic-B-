import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  
   public apiData = ajax
   (`${environment.URL}users`)
       .pipe(
       map(res => {
           if (!res.response) {
               throw new Error('Value expected!');
           }
           return res.response;
       }),
       catchError(err => of([]))
   );

  // apiUrl = 'https://jsonplaceholder.typicode.com';
  
  //  getUsers() {
  //   return new Promise(resolve => {
  //     this.http.get(`${environment.URL}users`).subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }











}
