// Did you register early? Enter true or false;
const registerEarly = false;

// Enter your age
const runnerAge = 8;

var adult = true;

let raceNumber = Math.floor(Math.random() * 1000);

// These are the race times!
const earlyRace = '9:30am';

const lateRace = '11:00am';

const youthRace = '12:30pm';

if(runnerAge < 18) {
    adult = false
};

if(registerEarly === true && adult === true) {
    raceNumber *= 1000
};

const numberStatement = `Your number is ${raceNumber}, and you race at`;

if(registerEarly === true && adult === true) {
    console.log(`${numberStatement} ${earlyRace}.`);
} else if(registerEarly != true && adult === true) {
    console.log(`${numberStatement} ${lateRace}.`);
} else if(adult != true) {
    console.log(`${numberStatement} ${youthRace}.`);
}
