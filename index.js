alert("Akmerey,CS-2117");
document.getElementById("name").innerHTML="Akmerey,CS-2117";

var today = new Date();
var day= today.getDay();

var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.querySelector(".day").innerHTML ="Today is:" +daylist[day] + ".";

console.log("Today is:" +daylist[day])
)
