//variable: current time

//get current time

//  const t = new Date();
//  var time = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds();

// console.log(time);

//display the time

// const newClock = document.createElement('clock');
// newClock.setAttribute('src', time);

//update the display

var timer = setInterval(counter, 1000)

function counter() {
    const t = new Date();
    var time = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds(); //gets current time
    const newClock = document.getElementById('clock'); //creates clock element in document
    newClock.innerText = time; //sets clock element equal to current time
    //console.log(time);
}
