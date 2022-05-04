import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
        <h1>{{ title }} </h1>
        <button (click)="acumular(base)"> +{{base}}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)"> -{{base}}</button>
        <h3>La base es: <strong>{{base}}</strong></h3>
        </body>
    </html>
    
    `
})
export class ContadorComponent { 
    title:string = 'Contador App';
    numero:number =10;
    base:number = 5;
    /*sumar(){
      this.numero +=1
    }
    restar(){
      this.numero -=1
    } */
    
    acumular(valor:number){
      this.numero +=valor
    }

}