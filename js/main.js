
// let distance = 50
// let speed = 100

// // time?


//     console.log(distance/speed+ " hour");


function time() {
    let man = 3.6
    let bike = 20.1
    let car = 70
    let airplane = 800

    var distance = document.getElementById("km").value;

    document.getElementById("man-m").innerHTML = ((distance / man) * 60).toFixed() + " min"
    document.getElementById("bike-m").innerHTML = ((distance / bike) * 60).toFixed() + " min"
    document.getElementById("car-m").innerHTML = ((distance / car) * 60).toFixed() + " min"
    document.getElementById("airplane-m").innerHTML = ((distance / airplane) * 60).toFixed() + " min"

    // document.getElementById("man").innerHTML = (distance / 3.6).toFixed(2) + " hour"
    // document.getElementById("bike").innerHTML = (distance / 20.1).toFixed(2) + " hour"
    // document.getElementById("car").innerHTML = (distance / 70).toFixed(2) + " hour"
    // document.getElementById("airplane").innerHTML = (distance / 800).toFixed(2) + " hour"

    if (String((distance / man).toFixed(2)).slice(-2) == 00) {
        document.getElementById("man").innerHTML = distance / man + " hour"
    } else {
        document.getElementById("man").innerHTML = (distance / man).toFixed(2) + " hour"
    }

    if (String((distance / bike).toFixed(2)).slice(-2) == 00) {
        document.getElementById("bike").innerHTML = distance / bike + " hour"
    } else {
        document.getElementById("bike").innerHTML = (distance / bike).toFixed(2) + " hour"
    }

    if (String((distance / car).toFixed(2)).slice(-2) == 00) {
        document.getElementById("car").innerHTML = distance / car + " hour"
    } else {
        document.getElementById("car").innerHTML = (distance / car).toFixed(2) + " hour"
    }

    if (String((distance / airplane).toFixed(2)).slice(-2) == 00) {
        document.getElementById("airplane").innerHTML = distance / airplane + " hour"
    } else {
        document.getElementById("airplane").innerHTML = (distance / airplane).toFixed(2) + " hour"
    }

    // function zero(x) {
    //     var distance = document.getElementById("km").value;
    //     var id = x.toString()

    //     if (String((distance / x).toFixed(2)).slice(-2) == 00) {
    //         document.getElementById(id).innerHTML = distance / x + " hour"
    //     } else {
    //         document.getElementById(id).innerHTML = (distance / x).toFixed(2) + " hour"
    //     }
    // }

    // zero(car)
}

var input = document.getElementById("km");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn").click();
    }
});

// let x =sad

// console.log(String(x));

// const lastDigit2Str = String(num2).slice(-1);
// const lastDigit2Num = Number(lastDigit1Str)


// if()

// let bike = 20.1
// let car = 70
// if (String((705/ car).toFixed(2)).slice(-2) == 00){
//     console.log(70/ car)
// }else{
//     console.log("error");
// }
// console.log(70/ car)



// console.log((100 / 10).toFixed(2).slice(-2));
// console.log(100 / 10);


