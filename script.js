// days of the week from  device
var date = new Date();
var day = date.getDay();
var daysOfTheWeek;
var quotes;

//days of the week and its corresponding quotes
if(day == 0){
    daysOfTheWeek = "Itz Sunday";
    quotes = "Sunday is a perfect day to choose a new path in life, don’t be afraid of changes,they come when they are really needed ...";
}

else if(day == 1){
    daysOfTheWeek = "Itz Monday";
    quotes = "To be successful, the first thing to do is fall in love with your work.";

}

else if(day == 2){
    daysOfTheWeek = "Itz  Tuesday";
    quotes = "You may find Tuesday harder than Mondays, however, let it be a day full of smiles and laughter!!";
}

else if(day == 3){
    daysOfTheWeek = "Itz Wednesday";
    quotes =  "Wednesdays are like Mondays in the middle of the week!";
}

else if(day == 4) {
    daysOfTheWeek = "Itz Thursday";
    quotes = "If there’s no wind, row.";
}

else if(day == 5){
    daysOfTheWeek = "Itz Friday";
    quotes = "cause it's Friday, lets party!";

}

else if(day == 6){
    daysOfTheWeek = "Itz Saturday";
    quotes = "itz weekend lets do the necessary house chores";
}

//execution of result
document.getElementById("days-of-the-week").innerHTML = daysOfTheWeek;
document.getElementById("corr-quote").innerHTML = quotes;