var total = prompt('How many km are left to go?');

// Your code below:
if (parseInt(total, 10) <= 50) {
    console.log("I'm parking. I'll see you right now");
} else if (parseInt(total, 10) <= 100) {
    console.log("We'll be there in 5 minutes");
} else {
    console.log("We still have a bit of driving left to go");
}