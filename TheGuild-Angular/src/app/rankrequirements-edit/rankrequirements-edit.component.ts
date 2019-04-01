import { Component, OnInit, ViewChild  } from '@angular/core';
import { Rankrequirements } from '../_models/rankrequirements';
import { RankrequirementsService } from '../_services/rankrequirements.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rankrequirements-edit',
  templateUrl: './rankrequirements-edit.component.html',
  styleUrls: ['./rankrequirements-edit.component.css']
})
export class RankrequirementsEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;

  rankrequirements: Rankrequirements;

  isDisabled: boolean;
  disabletextArea() {
    this.isDisabled = !this.isDisabled;
  }

  constructor(private rankrequirementsService: RankrequirementsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadRankRequirement();
    this.isDisabled = true;
  }

  loadRankRequirement() {
    const lintStringLiteralFix = 'id';
    const lintLengthFix = +this.route.snapshot.params[lintStringLiteralFix];
    this.rankrequirementsService.getRankrequirement(lintLengthFix).subscribe((rankrequirements: Rankrequirements) => {
      this.rankrequirements = rankrequirements;
    }, error => {
      console.log(error);
    });
    }

    updateRankrequirement() {
      const lintStringLiteralFix = 'id';
      const lintLengthFix = +this.route.snapshot.params[lintStringLiteralFix];
      this.rankrequirementsService.updateRankrequirement(lintLengthFix , this.rankrequirements).subscribe(next => {
        this.editForm.reset(this.rankrequirements);
      }, error => {
        console.log(error);
      });
    }
}
