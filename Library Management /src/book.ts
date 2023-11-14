export class Book {
    private _title: string;
    private _author: string;
    private _isAvailable: boolean;
  
    constructor(title: string, author: string, isAvailable: boolean = true) {
      this._title = title;
      this._author = author;
      this._isAvailable = isAvailable;
    }
  
    get title(): string {
      return this._title;
    }
  
    get author(): string {
      return this._author;
    }
  
    get isAvailable(): boolean {
      return this._isAvailable;
    }
  
    checkout(): void {
      this._isAvailable = false;
    }
  
    returnBook(): void {
      this._isAvailable = true;
    }
  }
  