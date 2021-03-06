import { fifaData } from './fifa.js';



// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let WCF2014Data = fifaData.filter(data => {
    return data.Year === 2014 && data.Stage === "Final"
})

console.log(WCF2014Data)

//a
console.log(WCF2014Data[0]["Home Team Name"])

//b
console.log(WCF2014Data[0]["Away Team Name"])

//c
console.log(WCF2014Data[0]["Home Team Goals"])

//d
console.log(WCF2014Data[0]["Away Team Goals"])

//e
function winner(WCFInfo) {
    if (WCFInfo[0]["Home Team Goals"] > WCFInfo[0]["Away Team Goals"]){
        return WCFInfo[0]["Home Team Name"]
    } else {
        return WCFInfo[0]["Away Team Name"]
    }
}

console.log(winner(WCF2014Data))

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    return data.filter(gameInfo => gameInfo.Stage === "Final")

};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {

    let info = getFinals(fifaData)

    return info.map(gameInfo =>  gameInfo.Year)

};

console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {

    let info = getFinals(fifaData)

    return info.map(gameInfo => {
        
        if (gameInfo["Home Team Goals"] > gameInfo["Away Team Goals"]){
            return gameInfo["Home Team Name"]
        } else {
            return gameInfo["Away Team Name"]
        }
    })
};

console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {

    let years = getYears(getFinals)
    let winners = getWinners(getFinals)

    return years.map((item, index) =>{
        return `In ${item}, ${winners[index]} won the world cup!`
    })
    
};

console.log(getWinnersByYear(getWinners, getYears));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {

    let finalsGames = data.filter(gameInfo => gameInfo.Stage === "Final")

    return finalsGames.reduce(function(total, cv) {

        if (cv["Home Team Initials"] === initials &&  cv["Home Team Goals"] > cv["Away Team Goals"]) {
            return total + 1
        } else if (cv["Away Team Initials"] === initials &&  cv["Away Team Goals"] > cv["Home Team Goals"]) {
            return total + 1
        } else {
            return total
        }
    }, 0)
}

console.log(getCountryWins(fifaData, "ITA"));

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let homeGoalTotal = data.reduce(function(total, cv) {
        return total + cv["Home Team Goals"]
    }, 0)
    
    let homeAverage = homeGoalTotal / data.length

    let awayGoalTotal = data.reduce(function(total, cv) {
        return total + cv["Away Team Goals"]
    }, 0)

    let awayAverage = awayGoalTotal / data.length

    return `Home Average: ${homeAverage.toFixed(2)}, Away Average: ${awayAverage.toFixed(2)}`
};

// getAverageGoals();
console.log(getAverageGoals(fifaData))


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
