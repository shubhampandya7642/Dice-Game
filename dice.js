const rollButton = document.getElementById("rollButton");
const winStatementArray = ["Player 1 wins!", "Game Draw!", "Player 2 wins!"];
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const h2 = document.getElementById("h2");

const rand = ()=>{
    return Math.round(Math.random() * (5) + 1);
}

rollButton.onclick = ()=>{
    console.log("Button clicked!!");
    const num1 = rand();
    const num2 = rand();
    console.log("Num1: "+num1+" Num2: "+num2);
    const src1 = "images/"+num1+".png";
    const src2 = "images/"+num2+".png";
    img1.src = src1;
    img2.src = src2;

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