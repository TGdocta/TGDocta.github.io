import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  private path: string = 'https://www.dnd5eapi.co'

  constructor( private http : HttpClient ) { }

  getMonsters(){
    return this.http.get(`${this.path}/api/monsters`)
  }

  getMonster(url:string){
    return this.http.get(`${this.path}${url}`).pipe(
      map( (resp:any)=>{
        return {
          index : resp.index ,
          name : resp.name ,
          armor_class : resp.armor_class ,
          strength : resp.strength ,
          dexterity : resp.dexterity ,
          constitution : resp.constitution ,
          intelligence : resp.intelligence ,
          hit_points : resp.hit_points ,
          hit_dice : resp.hit_dice ,
          wisdom : resp.wisdom ,
          charisma : resp.charisma ,
          xp : resp.xp ,
          size : resp.size ,
          type : resp.type ,
          challenge_rating : resp.challenge_rating ,
          alignment : resp.alignment ,
          languages : resp.languages ,
          speed : resp.speed ,
        }
        
      })
    )
  }


}
