// global variables
const months: Array<string> = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const playerName: string = "Dylan Jung";
const gender: string = "Male";
const birthDate: Date = new Date('June 17, 2000 00:00:00');
const height: number = 170;
var today: Date = new Date();

const getUserData = () => {
  today = new Date();
  const playTime: Array<number> = getPlayTime();
  return {
    name: playerName,
    gender,
    age: Math.floor(Number(playTime[0])/365),
    birthday: dateToString(birthDate),
    height,
    playRecord: {
        days: playTime[0],
        hours: playTime[1],
        minutes: playTime[2],
        seconds: playTime[3],
    }
  }
}

/*
Returns the current date.
*/
function dateToString(date: Date) {
  return formatTime(date.getDate()) + " " + (months[date.getMonth()]) +
  " " + date.getFullYear();
}

/*
Gets the current time in the form: hrs:min:sec:AM/PM
*/
function getCurrentTime(){
  if (today.getHours() < 12) {
    return formatTime(((today.getHours()+11)%12)+1) + ":" +
    formatTime(today.getMinutes()) + ":" + formatTime(today.getSeconds()) + " AM";
  }
  else {
    return formatTime(((today.getHours()-1)%12)+1) + ":" +
    formatTime(today.getMinutes()) + ":" + formatTime(today.getSeconds()) + " PM";
  }
}

/*
Calculates total play time.
*/
function getPlayTime(){
  var millisecExisted: number = (today.valueOf() - birthDate.valueOf());
  var daysExisted: number = Math.floor(millisecExisted/1000/60/60/24);
  var hoursExisted: number = Math.floor(millisecExisted/1000/60/60)%24;
  var minsExisted: number = Math.floor(millisecExisted/1000/60)%60;
  var secsExisted: number = Math.floor(millisecExisted/1000)%60;
  return [daysExisted, hoursExisted, minsExisted, secsExisted];
}

/* Adds zeros to the front of time values such that there
are two digits in the time value.
*/
function formatTime(value: number){
  if (value<10){
    value = Number("0" + value);
  }
  return value;
}

export default getUserData;
