export class Book {
  constructor(public title: string, public author: string, public isAvailable: boolean = true) {}

  public checkout(): void {
    this.isAvailable = false;
  }

  public returnBook(): void {
    this.isAvailable = true;
  }
}