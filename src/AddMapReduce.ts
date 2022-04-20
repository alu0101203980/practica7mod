import  { BaseMap } from './BaseMap';


export class AddMap extends BaseMap {
  constructor(protected list: number[]) {
    super(list);
  }

  public initList() {
    console.log(`Inticializando vector`);
    for(let i = 0; i < 5; i++) {
      this.list_numbers.push(i+2);
    }
  }

  public addNumber(n: number) {
    for(let i = 0; i < 5; i++) {
      this.list_numbers[i] = this.list_numbers[i] + n;
    }
  }

  public reduce(): number {
    let sum: number = 0;
    for(let i = 0; i < 5; i++) {
      sum = sum + this.list_numbers[i];
    }
    return sum;
  }

  public afterInitialisation(): void {
    console.log(`Se ha inicializado`);
  }
  public afterMapping(): void{
    console.log(`Se ha mapeado sumando`);
  }

  public afterReduce(): void{
    console.log(`Se ha reducido sumando`);
  }
}


