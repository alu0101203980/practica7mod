export abstract class BaseMap {

  constructor(protected list_numbers: number[]) {
    this.list_numbers = []
  }


  public run() {
    // List initialisation
    this.initList();
    // Hook
    this.afterInitialisation();
    // Mapeando
    this.addNumber(2);
    //Hook
    this.afterMapping();
    //Reducing
    this.reduce();
    //Hook
    this.afterReduce();
    
  }


  protected printList() {
    console.log('Imprimiendo lista:');
    for (let i = 0; i < this.list_numbers.length; i++) {
      console.log(`Posición ${i}: ${this.list_numbers[i]}`)
    }
  }

  
  protected abstract initList(): void;
  protected abstract addNumber(n: number): void;
  protected abstract reduce(): number;
  

  protected afterInitialisation() {}
  protected afterMapping() {}
  protected afterReduce() {}
  
}