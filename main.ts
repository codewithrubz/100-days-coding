let my_name: string = "HELLO RUBA KHAN";//
console.log("would you like to learn some typescript today?");//

let userName: string = "Ruba";
console.log(userName.toLowerCase());//
console.log(userName.toUpperCase());//
console.log(userName[0].toUpperCase() + userName[0].toLowerCase());//

console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');

let famous_person: string = "Albert Einstein";
let message: string= `${famous_person} once said, "A person who never made a mistake never ried anything new"`;
console.log(message);

let user_Name: string = "\t\n Ruba\t\n";//
console.log(user_Name);
console.log(user_Name.trim());

console.log("addition : " , 5 + 3);
console.log(" subtraction: ", 10 - 2);
console.log(" multiplication: " , 4 * 2);
console.log("division: " , 16 / 2);

console.log(4+4);
console.log(12-4);
console.log(4*2);
console.log(16/2);

let favoriteNumber: number = 8;
console.log(`My favorite is ${favoriteNumber}`);

let myNAME: string = "Ruba";
console.log(`Hello ${myNAME}, would you like to learn some typescript today?`);

let A_name: string = ["Alice, Bob , Charlie"];
for (let i = 0;  i < A_name.length; i++){
    console.log(A_name[i]);

    let sheName: string[] = ["Alice, Bob ,Charlie"];
    for (let name of sheName) {
        console.log(`Hello ${sheName}, would you like to learn some typescript today?`);
    }
    
}

let transport: string [] = ["HondaMotorcycle", "Tesla car", "Bianchi bicycle"];
transport.forEach(transport => {
    console.log(`I would like to own a ${transport}`);
});

let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
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




















