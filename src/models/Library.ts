export class Library {
    isLend: boolean;
    description: string;
  
    constructor(public name: string) {
      this.isLend = false;
    }
}