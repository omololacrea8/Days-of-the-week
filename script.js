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

//adding timer will give it more sense 
(()=>{
    setInterval(()=>{
    
        const convert=new Date().toLocaleTimeString();
       const elem=document.querySelector('h3');
      return  elem.innerHTML=convert; 
    },1000)

    //quote of the day 
    const motive= async ()=>{
        const api= await fetch('http://quotes.stormconsultancy.co.uk/random.json');
        const res=await  api.json()
        return res ;
    }
    motive().then( res =>{
        var show=document.querySelector('h4')
        show.innerHTML=`favourite Quote of the day:
            ${res.quote}
        `



    } )
})()