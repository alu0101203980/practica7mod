import  { Revista } from './revista';
import  { Sujeto } from '../src/revista';
import  { Observador } from '../src/revista';
import  { Article } from '../src/revista';


export class Suscriptor implements Observador {
  
    constructor(public username: string) { }
  
    public update(subject: Sujeto): void {
      if (subject instanceof Revista) {
        console.log(`${this.username} lee el número de ${subject.title}`);
      }
    }
  }


