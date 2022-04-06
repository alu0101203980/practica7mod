import  { Suscriptor } from './suscriptor';

export interface Article {
    title: string;
  }
  
  export interface Subject<T> {
    subscribe(observer: Observer<T>): void;
    unsubscribe(observer: Observer<T>): void;
    notify(data: T): void;
  }
  
  export interface Observer<T> {
    update(subject: Subject<T>): void;
  }
  
  export interface Observador extends Observer<Article> {
    username: string;
  }
  export interface Sujeto extends Subject<Article> {
    title: string;
  }
  
  /**
   * This is our ConcreteSubject
   */
  export class Revista implements Sujeto {
  
    constructor(public title: string, public date: string, public numberofArticles: number) { }
  
    private observers: Observador[] = [];
  
    public subscribe(observer: Observador): string {
      let cad: string = `${observer.username} subscribed to ${this.title} numbers.`;
      const isAlreadyObserver = this.observers.includes(observer);
      if (isAlreadyObserver) return cad;
      this.observers.push(observer);
      this.logSubscribers();
      return cad;
    }
  
    public unsubscribe(observer: Observador): string {
        let cad: string = `${observer.username} unsubscribed from ${this.title} articles.`;
      this.observers = this.observers.filter((other) => other !== observer);
      this.logSubscribers();
      return cad;
    }
  
    public notify(): void {
      this.observers.map(observer => observer.update(this));
    }
  
    public nuevoNumero(article: Article): string {
      let cad: string = `${this.title} published a new article: '${article.title}'`;
      this.notify();
      return cad;
    }
  
    private logSubscribers(): string {
      let cad: string = `${this.title} now has ${this.observers.length} subscribers.`;
      return cad;
    }
  }
  
  /**
   * This is a ConcreteObserver
   */
  
  
  const marca = new Revista('Marca','20 de febrero',10);
  
  const Diego = new Suscriptor('Diego');
  marca.subscribe(Diego);
  
  const Hugo = new Suscriptor('Hugo');
  marca.subscribe(Hugo);
  
  
  marca.nuevoNumero({
    title: 'Will Web Components Replace Frontend Frameworks?',
  });
  
  marca.unsubscribe(Hugo);
  
  marca.nuevoNumero({
    title: 'Design Patterns With TypeScript Examples: Observer',
  });