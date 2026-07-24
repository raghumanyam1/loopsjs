const birthday = new Date("August 19, 1975 23:15:30");
const date = birthday.getDate();

console.log(date);

const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getFullYear());

const birth = new Date("March 13, 08 04:20");

console.log(birth.getHours());

const event = new Date("August 19, 1975 23:15:30");

event.setDate(24);

console.log(event.getDate());

const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);