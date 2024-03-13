"use strict";
let my_name = "HELLO RUBA KHAN"; //
console.log("would you like to learn some typescript today?"); //
let userName = "Ruba";
console.log(userName.toLowerCase()); //
console.log(userName.toUpperCase()); //
console.log(userName[0].toUpperCase() + userName[0].toLowerCase()); //
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "A person who never made a mistake never ried anything new"`;
console.log(message);
let user_Name = "\t\n Ruba\t\n"; //
console.log(user_Name);
console.log(user_Name.trim());
console.log("addition : ", 5 + 3);
console.log(" subtraction: ", 10 - 2);
console.log(" multiplication: ", 4 * 2);
console.log("division: ", 16 / 2);
console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
let favoriteNumber = 8;
console.log(`My favorite is ${favoriteNumber}`);
let myNAME = "Ruba";
console.log(`Hello ${myNAME}, would you like to learn some typescript today?`);
let A_name = ["Alice, Bob , Charlie"];
for (let i = 0; i < A_name.length; i++) {
    console.log(A_name[i]);
    let sheName = ["Alice, Bob ,Charlie"];
    for (let name of sheName) {
        console.log(`Hello ${sheName}, would you like to learn some typescript today?`);
    }
}
let transport = ["HondaMotorcycle", "Tesla car", "Bianchi bicycle"];
transport.forEach(transport => {
    console.log(`I would like to own a ${transport}`);
});
let guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
});
let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);
//Replace the guest 
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New inivitation
guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
});
