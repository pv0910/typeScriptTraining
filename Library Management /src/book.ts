export class Book {
  constructor(public title: string, public author: string, public isAvailable: boolean = true) {}

  checkout(): void {
    this.isAvailable = false;
  }

  returnBook(): void {
    this.isAvailable = true;
  }
}