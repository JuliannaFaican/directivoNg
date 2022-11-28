import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void {
  }
  atras(){
    this.nav.navigate([''])
  }

}
