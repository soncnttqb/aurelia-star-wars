export class User {
  public id: number;
  public email: string;
  public password: string;

  constructor(id: number, email: string)  {
    this.id = id;
    this.email = email;
  }
}
