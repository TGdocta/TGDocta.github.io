import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster.interface';
import { MonstersService } from 'src/app/services/monsters.service';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {

  monsters:Monster[] = []
  searchString:string = '';
  monstersPerPage:number=12;
  p:any;

  constructor( private monstersSVC : MonstersService) { }

  ngOnInit(): void {
    this.loadMonsters();
  }

  loadMonsters(){
    this.monstersSVC.getMonsters().subscribe((data:any) => {
      for (const i of data.results) {
        this.monstersSVC.getMonster(i.url).subscribe(((data:any)=>{
          this.monsters.push(data)
        }))
      }  
    })
  }

  clearFilter(){
    this.searchString  = '';
  }



}
