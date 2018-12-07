import { Component, OnInit } from '@angular/core';
import { Job } from '../job.ts';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {




job: Job = {
    id: 1,
    name: 'Street sweeper',
    strength: 15,
    intelligence: 0,
    creativity: 0,
    patriotism: 10,
    stamina: 20
  };

  constructor() { }

  ngOnInit() {
  }

}
