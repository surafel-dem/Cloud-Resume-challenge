

// JavaScript to get the visitor counter 

const counter = document.querySelector("counter-visitor");

async function updateCounter(){
    const FUN_URL = process.env.DYNAMODB_FUN_URL;
    let res = await fetch(FUN_URL);
    console.log(FUN_URL);
    let data = await Response.json();
     counter.innerHTML = 'Visitors: ${data}';
}

updateCounter();