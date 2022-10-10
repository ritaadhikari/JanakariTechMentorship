let users = ["Rita", "Samikshya", "salipa", "susmita", "dikshya"];
console.log(users);
for (let i = 0; i <= users.length; i++) {
  console.log([i + 1], ".", users[i]);
}
function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}
seatplanning = [];

while (users.length != 0) {
  let randomNumber = getRandomNumber(0, users.length - 1);
  let pickedStudent = users[randomNumber];
  seatplanning.push(pickedStudent);
  users.splice(randomNumber, 1);
}
console.log(seatplanning);
// const index = users.indexOf(randomNumber);
for (let i = 0; i <= seatplanning.length; i++) {
  console.log([i + 1], ".", seatplanning[i]);
}
