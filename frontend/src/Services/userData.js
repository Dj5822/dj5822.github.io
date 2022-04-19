// global variables
const playerName = "Dylan Jung";
const birthDate = new Date('June 17, 2000 00:00:00');
var today = new Date();

const getUserData = () => {
  today = new Date();
  const playTime = getPlayTime();
  return {
    name: playerName,
    age: Math.round(playTime[0]/365*1000)/1000,
    birthDate: dateToString(birthDate),
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
function dateToString(date) {
  return formatTime(date.getDate()) + "/" + formatTime(date.getMonth()+1) +
  "/" + date.getFullYear();
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
  var millisecExisted = (today - birthDate);
  var daysExisted = Math.floor(millisecExisted/1000/60/60/24);
  var hoursExisted = Math.floor(millisecExisted/1000/60/60)%24;
  var minsExisted = Math.floor(millisecExisted/1000/60)%60;
  var secsExisted = Math.floor(millisecExisted/1000)%60;
  return [daysExisted, hoursExisted, minsExisted, secsExisted];
}

/* Adds zeros to the front of time values such that there
are two digits in the time value.
*/
function formatTime(value){
  if (value<10){
    value = "0" + value;
  }
  return value;
}

export default getUserData;
