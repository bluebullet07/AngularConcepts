import { Component } from '@angular/core';

@Component({

    selector: 'app-user',
   // template: '<h2>I am the new user</h2>'
   templateUrl:'./user.component.html',
   styleUrls: ['./user.component.css']

})

export class UserComponent {

// Properties

    firstname: string;
    lastname: string;
    age: number;
    address;
    foo:any;

// Methods
// constructor is mostly used for dependency injection 
constructor() {
    this.firstname = 'John';
    this.lastname = 'Doe';
    this.age = 30;
    this.address = {
        street: '12 Mountain VW',
        city: 'Peterborough',
        state: 'Cambs'
    }

    this.foo = 'true';
}

sayHello()
{
    console.log(`find ${this.firstname}`);
}

hasBirthday()
{
this.age +=1;
}

}
