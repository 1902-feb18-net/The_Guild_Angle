import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../_services/progress.service';
import { Progress } from '../_models/progress';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  progresses: Progress[];

  constructor(private progressService: ProgressService) { }

  ngOnInit() {
    this.loadProgress();
  }

  loadProgress() {
    this.progressService.getProgresses().subscribe((progresses: Progress[]) => {
      this.progresses = progresses;
    }, error => {
      console.log(error);
    });
  }

}
