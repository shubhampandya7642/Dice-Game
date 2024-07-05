const rollButton = document.getElementById("rollButton");
const winStatementArray = ["Player 1 wins!", "Game Draw!", "Player 2 wins!"];
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const h2 = document.getElementById("h2");

rollButton.onclick = ()=>{
    const num1 = Math.round(Math.random() * (5) + 1);    //Generating a random number between 1 and 6
    const num2 = Math.round(Math.random() * (5) + 1);    //Generating a random number between 1 and 6
    console.log("Num1: "+num1+" Num2: "+num2);    //Just for verification
    img1.src = num1+".png";
    img2.src = num2+".png";

    if(num1 > num2){
        h2.innerText = winStatementArray[0];
    }
    else if(num1 === num2){
        h2.innerText = winStatementArray[1]
    }
    else {
        h2.innerText = winStatementArray[2];
    }
}
