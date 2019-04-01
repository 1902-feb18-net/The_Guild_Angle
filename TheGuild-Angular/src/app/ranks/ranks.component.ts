import { Component, OnInit } from '@angular/core';
import { RankService } from '../_services/rank.service';
import { Rank } from '../_models/rank';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {
  ranks: Rank[];

  constructor(private rankService: RankService) { }

  ngOnInit() {
    this.loadRanks();
  }

  loadRanks() {
    this.rankService.getRanks().subscribe((ranks: Rank[]) => {
      this.ranks = ranks;
    }, error => {
      console.log(error);
    });
  }

}
