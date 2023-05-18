

// JavaScript to get the visitor counter 

const counter = document.querySelector("counter-visitor");

async function updateCounter(){
    let res = await fetch("https://ulrspzl7isxu5ecb6jqwzv7bgq0grfsj.lambda-url.us-east-1.on.aws/");
    let data = await Response.json();
    counter.innerHTML = ' Visitors: ${data}';
}

updateCounter();