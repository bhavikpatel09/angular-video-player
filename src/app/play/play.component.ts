import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  videoUrl: any;
  url: string;
  showComponent: boolean = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.url = queryParams['url'];
    });
  }

  ngOnInit() {
    this.showComponent = true;
  }

}
