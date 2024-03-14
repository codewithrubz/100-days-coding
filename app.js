var guestss = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests 
guestss.unshift("Issac Newton");
guestss.splice(guestss.length / 2, 0, "Charles Darwin");
guestss.push("Ada Lovelace");
guestss.forEach(function (guestss) {
    console.log("Dear ".concat(guestss, ", would you like to join me for dinner?"));
});
var guestsss = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Elon Mask", "Dicaprio",
    "Bill Gate"];
console.log("Unfortunately, I can only invite two people for dinner");
while (guestsss.length > 2) {
    var removedGuestsss = guestsss.pop();
    console.log("Sorry, ".concat(removedGuestsss, ", I can't invite you to dinner."));
}
guestss.forEach(function (guestss) {
    console.log("Sorry, ".concat(guestss, ", you're still invited to dinner."));
});
guestsss.splice(0, guestsss.length);
console.log(guestsss);
