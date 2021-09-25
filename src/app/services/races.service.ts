import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  private path : string  = 'https://www.dnd5eapi.co';

  constructor(private http: HttpClient) { }

  getRaces(){
   return this.http.get(`${this.path}/api/races`)
  }

  getRaceByUrl(url:string){
    return this.http.get(`${this.path}${url}`).pipe(
      map((resp:any)=>{
        return {
          index:resp.index,
          name:resp.name,
          age:resp.age,
          alignment:resp.alignment,
          size_description:resp.  size_description,
        }
      })
    )
  }

}
