import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
// (a) 
const gameData2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === "Final";
});
console.log(gameData2014[0]["Home Team Name"]);

//(b)
console.log(gameData2014[0]["Away Team Name"]);

//(c)
const goalData2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === "Final";
});

console.log(goalData2014[0]["Home Team Goals"]);

//(d)
console.log(goalData2014[0]["Away Team Goals"]);

//(e)
const winData2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === "Final";
}); 
console.log(winData2014[0]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(item) {
    const result =  fifaData.filter(function(item) {
      return item.Stage === "Final";
    });
    return result;
}    
  console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(myArray) {
    const filteredArray = getFinals(myArray);
    const result = filteredArray.map(function(item){
        return item.Year
    });
    return result;       
};

console.log(getYears(fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(myArray) {
    const filteredArray = getFinals(myArray);
    const winners = filteredArray.map(function(item){
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            return item["Home Team Name"];
        }
        else if(item["Away Team Goals"] > item["Home Team Goals"]){
            return item["Away Team Name"];
        }
        else{
            return "Tie";
        }
    });
    return winners;
};

console.log(getWinners(fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnersFunc, yearsFunc) {
    const years = yearsFunc(fifaData);
    const winners = winnersFunc(fifaData);
    let winnersByYear = []
    for (let i = 0; i < years.length; i++) {
        if(winners[i] == "Tie"){
            winnersByYear.push(`In ${years[i]}, the world cup was a tie!`)
        }

        else{
            winnersByYear.push(`In ${years[i]}, ${winners[i]} won the world cup!`)
        }   
    };
   return winnersByYear 
};

console.log(getWinnersByYear(getWinners,getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

// cosnt homeTeamSum = data.reduce((acc, cur) => {
// return acc += curr
// }, 0);


function getAverageGoals(data) {
    
    const homeTeamSum = data.reduce((total,item) => {
        let sum = total + item["Home Team Goals"];
        return sum;
    }, 0); 
    
    const awayTeamSum = data.reduce((total,item) => {
        let sum = total + item["Away Team Goals"];
        return sum;
    }, 0);
    
    const homeAverage =  homeTeamSum / data.length;
    
    const awayAverage = awayTeamSum / data.length;

    return {
        homeAverage: homeAverage,
        awayAverage: awayAverage
    };
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
