import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anglur-video-player';
  constructor(private router:Router){

  }
  play(url:string):void{
    this.router.navigate(['/play'],{queryParams:{url:url}});
  }
}
