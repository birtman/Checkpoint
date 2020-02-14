/*
We're building a ticket selling app for a cinema and we need to represent
all the seats in the main room.

In this room, the seats are organized as follows: 
    - There are 26 rows of seats. Each row is numbered from "1" to "26" 
    - Each row has 100 seats. Each seat is numbered from "1" to "100"
    

Create a function that returns an array of seats.
Each item in the array should be in the form: row-seat.

The final array should look something like this:
[
    1-1,
    1-2,
    1-3,
    .
    .
    .
    26-98,
    26-99,
    26-100
]
*/

/*const displaySeat = () => {
  const allseats = [];

  for (let rowCounter = 0; rowCounter < 26; rowCounter++) {
    const coordinates = [];
    const seats = String.fromCharCode(97 + rowCounter);

    for (let seatCounter = 0; seatCounter < 100; seatCounter++) {
      coordinates.push(`${seats})—${seatCounter}`);
    }
    allseats.push(coordinates);
  }
  return allseats;
};

console.log(displaySeat());
*/

/*const displaySeat = () => {
  const allseats = [];

  for (let rowCounter = 0; rowCounter <= 26; rowCounter++) {
    const coordinates = [];
    const seats = [];

    for (let seatCounter = 0; seatCounter <= 100; seatCounter++) {
      coordinates.push(`${seats})—${seatCounter}`);
    }
    allseats.push(coordinates);
  }
  return allseats;
};

console.log(displaySeat());
*/

/*const displaySeat = [];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let rowCounter = 0; rowCounter < 27; rowCounter++) {
  let temp = [];
  for (let seatCounter = 0; seatCounter < 101; seatCounter++) {
    temp.push(rows[rowCounter] + "–" + (seatCounter + 1));
  }
  displaySeat[rowCounter] = temp;
}

console.log(displaySeat);*/
const displaySeat = () => {
  const allseat = [];

  for (let rowCounter = 0; rowCounter < 26; rowCounter++) {
    let temp = [];

    for (let seatCounter = 0; seatCounter < 100; seatCounter++) {
      temp.push(rowCounter + "–" + (seatCounter + 1));
    }
    displaySeat[rowCounter] = temp;
  }
};

console.log(displaySeat);
