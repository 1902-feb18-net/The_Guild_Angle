import { Component, OnInit } from '@angular/core';
import { RequestService } from '../_services/request.service';
import { Request } from '../_models/request';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: Request[];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.getRequests().subscribe((requests: Request[]) => {
      this.requests = requests;
    }, error => {
      console.log(error);
    });
  }
}
