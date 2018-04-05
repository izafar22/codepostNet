import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  
  result:any;
  constructor(private _http:Http) { }

  getPosts(){
    return this._http.get('/api/posts')
    .map(results=> this.result= results.json());
  }

  getPost(id){
    return this._http.get('/api/details/'+ id)
    .map(results=> this.result= results.json());
  }
}
