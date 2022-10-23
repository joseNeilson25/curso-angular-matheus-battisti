import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string ="seu nome"
  age: number = 30
  job = "Programador"
  hobbies = ["Correr", "jogar", "Estudar"]

  constructor() { }

  ngOnInit(): void {
  }

}
