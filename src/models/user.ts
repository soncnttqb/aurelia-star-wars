export class User {
  public id: number;
  public email: string;
  public password: string;
  
  constructor(_id: number, _email: string){
    this.id = _id;
    this.email = _email;
  }
}
