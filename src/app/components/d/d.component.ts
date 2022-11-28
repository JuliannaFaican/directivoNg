import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.css']
})
export class DComponent implements OnInit {

  constructor(private router: Router) { }

  numero:any;
  nombre_variable:number=0;
  vector: string[]=[]
  suma:number=0;
  suma2:number=0

  ngOnInit(): void {
    this.numero=1;
    this.total();

  }

  total()
  {
    let numero1:number=0;    
    let numero2:number=2;
    
    this.suma=numero1+numero2;
    console.log(this.suma);

    this.suma2=this.suma+5;
    console.log(this.suma2);

    this.total2(this.suma2)

  }

total2(sum:number)
{
  console.log(sum*2);

}


  navegacion1()
  {
    this.router.navigate(['web1'])
  }
  navegacion2()
  {
    this.router.navigate(['web2'])
  }
}
