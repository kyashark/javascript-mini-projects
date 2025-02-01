console.log("JavaScript Output Methods");

let message = document.querySelector("h1");
let main = document.querySelector("main");

function greetUser() {
  let username = prompt("What's your name");

  if (!username) {
    message.innerText = `Hello Guest`;
  } else {
    message.innerText = `Hello ${username}`;
  }
}

function getAge() {
  let age = prompt("what's your age");
  age = Number(age);

  if (isNaN(age) || age < 0) {
    let retry = confirm("Invalid input! Do you want to try again?");
    if (retry) {
      getAge();
    } else {
      main.innerHTML = "<h1>Okay, maybe next time!</h1>";
    }
    return;
  }

  displayAgeMessage(age);
}

function displayAgeMessage(age) {
  if (age > 120) {
    main.innerHTML = "<h1>Are you sure you're still alive? 👀</h1>";
  } else if (age >= 100) {
    main.innerHTML = "<h1>Whoa! You've seen it all!</h1>";
  } else if (age >= 60) {
    main.innerHTML = "<h1>Golden years! Enjoy the wisdom!</h1>";
  } else if (age >= 30) {
    main.innerHTML = "<h1>Adulting... hope you're surviving!</h1>";
  } else if (age >= 18) {
    main.innerHTML = "<h1>Welcome to taxes and responsibilities!</h1>";
  } else if (age >= 13) {
    main.innerHTML = "<h1>Teen mode: Drama & Wi-Fi!</h1>";
  } else if (age >= 6) {
    main.innerHTML = "<h1>Kiddo detected! No bedtime yet?</h1>";
  } else if (age >= 1) {
    main.innerHTML = "<h1>Tiny human learning big things!</h1>";
  } else if (age == 0) {
    main.innerHTML = "<h1>Fresh out of the factory!</h1>";
  } else {
    main.innerHTML = "<h1>Hmm... Are you even real?</h1>";
  }
}

greetUser();
