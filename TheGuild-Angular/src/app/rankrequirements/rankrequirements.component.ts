import { Component, OnInit } from '@angular/core';
import { RankrequirementsService } from '../_services/rankrequirements.service';
import { Rankrequirements } from '../_models/rankrequirements';

@Component({
  selector: 'app-rankrequirements',
  templateUrl: './rankrequirements.component.html',
  styleUrls: ['./rankrequirements.component.css']
})
export class RankrequirementsComponent implements OnInit {
  rankrequirements: Rankrequirements[];
  constructor(private rankrequirementsService: RankrequirementsService) { }

  ngOnInit() {
    this.loadRankrequirements();
  }

  loadRankrequirements() {
    this.rankrequirementsService.getRankrequirements().subscribe((rankrequirements: Rankrequirements[]) => {
      this.rankrequirements = rankrequirements;
    }, error => {
      console.log(error);
    });
  }

}
