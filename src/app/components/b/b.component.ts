import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void { }
  atras(){
    this.nav.navigate([''])
  }

}
