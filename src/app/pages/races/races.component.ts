import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race.interface';
import { RacesService } from 'src/app/services/races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  searchString:string = '';
  races:any= [];
  raceItem: Race ={
    index: '',
    name: '',
    age: '',
    alignment: '',
    size_description: ''
  }; 


  constructor(private racesSVC : RacesService) { }

  ngOnInit(): void {
    this.loadRaces();
  }

  loadRaces(){
    this.racesSVC.getRaces().subscribe((data:any)=>{
      for (const i of data.results) {
        this.racesSVC.getRaceByUrl(i.url).subscribe((resp:any)=>{
          this.races.push(resp)
        })
      }
    })
  }

  clearFilter(){
    this.searchString  = '';
  }

  bindRace(race:any){
    this.raceItem = race
    console.log(race);
    
  }

}
