let latency = 200;
let id = 0;

function getId(){
  return ++id;
}

let users = [
  {
    id:getId(),
    email:'pvanson1@gmail.com',
    password:'12345678'
  },
  {
    id:getId(),
    email:'pvanson2@gmail.com',
    password:'12345678'
  }
];

export class UserAPI {
  login(email: string, password: string){
    return new Promise(resolve => {
      setTimeout(() => {
        let found = users.filter(x => x.email == email && x.password == password);
        if(found.length) {
          var user  = JSON.parse(JSON.stringify(found[0]));
          resolve({id: user.id, email: user.email});
        }
        else {
          resolve(null);
        }
      }, latency);
    });
  }
}
