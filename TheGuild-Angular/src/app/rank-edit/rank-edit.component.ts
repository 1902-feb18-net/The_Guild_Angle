import { Component, OnInit, ViewChild  } from '@angular/core';
import { Rank } from '../_models/rank';
import { RankService } from '../_services/rank.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rank-edit',
  templateUrl: './rank-edit.component.html',
  styleUrls: ['./rank-edit.component.css']
})
export class RankEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;

  rank: Rank;

  isDisabled: boolean;
  disabletextArea() {
    this.isDisabled = !this.isDisabled;
  }
  constructor(private rankService: RankService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadRank();
    this.isDisabled = true;
  }
  loadRank() {
    const lintStringLiteralFix = 'id';
    this.rankService.getRank(+this.route.snapshot.params[lintStringLiteralFix]).subscribe((rank: Rank) => {
      this.rank = rank;
    }, error => {
      console.log(error);
    });
    }

    updateRank() {
      const lintStringLiteralFix = 'id';
      this.rankService.updateRank(+this.route.snapshot.params[lintStringLiteralFix], this.rank).subscribe(next => {
        this.editForm.reset(this.rank);
      }, error => {
        console.log(error);
      });
    }
}
