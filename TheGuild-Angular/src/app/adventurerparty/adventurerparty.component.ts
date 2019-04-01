import { Component, OnInit } from '@angular/core';
import { AdventurerpartyService } from '../_services/adventurerparty.service';
import { Adventurerparty } from '../_models/adventurerparty';

@Component({
  selector: 'app-adventurerparty',
  templateUrl: './adventurerparty.component.html',
  styleUrls: ['./adventurerparty.component.css']
})
export class AdventurerpartyComponent implements OnInit {
  adventurerpartys: Adventurerparty[];

  constructor(private adventurerpartyService: AdventurerpartyService) { }

  ngOnInit() {
    this.loadAdventurerpartys();
  }

  loadAdventurerpartys() {
    this.adventurerpartyService.getAdventurerpartys().subscribe((adventurerpartys: Adventurerparty[]) => {
      this.adventurerpartys = adventurerpartys;
    }, error => {
      console.log(error);
    });
  }

}
