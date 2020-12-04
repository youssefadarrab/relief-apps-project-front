import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from 'src/history';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }

  getHistoryList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/history/');
  }

  addHistory(history:any):Observable<any>{
    return this.http.post<any>(this.APIUrl + '/history/',history, httpOptions);
  }

  getBookmarkList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/bookmark/');
  }

  addBookmark(val:any){
    return this.http.post(this.APIUrl + '/bookmark/',val);
  }


  deleteVideoBookmark(val:any){
    return this.http.delete(this.APIUrl + '/video/'+val);
  }


  


}
