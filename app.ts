let guestss: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests 
guestss.unshift("Issac Newton");
guestss.splice(guestss.length / 2, 0, "Charles Darwin");
guestss.push("Ada Lovelace");

guestss.forEach(guestss => {
    console.log(`Dear ${guestss}, would you like to join me for dinner?`);
})
let guestsss: string[] = ["Albert Einstein","Marie Curie","Leonardo da Vinci","Elon Mask","Dicaprio",
"Bill Gate"];

console.log("Unfortunately, I can only invite two people for dinner");

while (guestsss.length > 2){
    let removedGuestsss = guestsss.pop();
console.log(`Sorry, ${removedGuestsss}, I can't invite you to dinner.`);
 }

 guestss.forEach(guestss => {
    console.log(`Sorry, ${guestss}, you're still invited to dinner.`);
 });

 guestsss.splice(0,guestsss.length)
 console.log(guestsss);
 
 
