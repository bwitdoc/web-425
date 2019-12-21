/*
==================
Title: Assignment 1.4
Author: Richard Krasso
Modified By: Brittany Dockter
Date: December 20 2019
==================
*/

let firstName: string = 'Brittany';
let lastName: string = 'Dockter';

// myName function

function myName(firstName: string, lastName: string) : string {
    return 'Hello ' + firstName + ' ' + lastName;
}


// calling output
console.log(myName(firstName, lastName));