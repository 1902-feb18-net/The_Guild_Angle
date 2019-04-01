import { Component, OnInit } from '@angular/core';
import { RequestinggroupService } from '../_services/requestinggroup.service';
import { Requestinggroup } from '../_models/requestinggroup';

@Component({
  selector: 'app-requestinggroup',
  templateUrl: './requestinggroup.component.html',
  styleUrls: ['./requestinggroup.component.css']
})
export class RequestinggroupComponent implements OnInit {
  requestinggroups: Requestinggroup[];

  constructor(private requestinggroupService: RequestinggroupService) { }

  ngOnInit() {
    this.loadRequestinggroups();
  }

  loadRequestinggroups() {
    this.requestinggroupService.getRequestinggroups().subscribe((requestinggroups: Requestinggroup[]) => {
      this.requestinggroups = requestinggroups;
    }, error => {
      console.log(error);
    });
  }

}
