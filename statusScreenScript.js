// calculate current time.
function updateTime() {
  var today = new Date();
  var currentDate = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();
  var currentTime = "";
  if (today.getHours() < 12) {
    currentTime = formatTime(((today.getHours()+11)%12)+1) + ":" +
    formatTime(today.getMinutes()) + ":" + formatTime(today.getSeconds()) + " AM";
  }
  else {
    currentTime = formatTime(((today.getHours()-1)%12)+1) + ":" +
    formatTime(today.getMinutes()) + ":" + formatTime(today.getSeconds()) + " PM";
  }

  var millisecExisted = (today - birthDate);
  var daysExisted = Math.floor(millisecExisted/1000/60/60/24);
  var hoursExisted = Math.floor(millisecExisted/1000/60/60)%24;
  var minsExisted = Math.floor(millisecExisted/1000/60)%60;
  var secsExisted = Math.floor(millisecExisted/1000)%60;


  document.getElementById("current-date").innerHTML = currentDate;
  document.getElementById("current-time").innerHTML = currentTime;
  document.getElementById("play-time").innerHTML = daysExisted + " days " +
  hoursExisted + " hours " + minsExisted + " mins " + secsExisted + " secs";
  setTimeout(updateTime, 500);
}

function formatTime(value){
  if (value<10){
    value = "0" + value;
  }
  return value;
}

const birthDate = new Date('June 17, 2000 00:00:00');
document.getElementById("name").innerHTML = "Dylan Jung";
document.getElementById("age").innerHTML = "20";
document.getElementById("birth-date").innerHTML = "17/06/2000";
updateTime();
