
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor")
let i=0;
let j=0;
console.log("sau")

function compgen(){
   let arr=['rock','paper','scissor']
   let inn=Math.floor(Math.random()*3);
    return arr[inn];
}
function winner(huwin, humanwin, compwin) {
    if (huwin) {
        i = i + 1;
        document.querySelector(".yscore").innerText = i;
        document.querySelector(".msg").innerText = `You win ${humanwin} beats ${compwin}`;
        document.getElementsByClassName("msg")[0].style.backgroundColor = "green";
    } else {
        j = j + 1;
        document.querySelector(".cscore").innerText = j;
        document.querySelector(".msg").innerText = `Comp wins ${compwin} beats ${humanwin}`;
        document.getElementsByClassName("msg")[0].style.backgroundColor = "red";
    }
}

function compare(humanwin,compwin)
{
    huwin=true;
    if(humanwin===compwin){
        document.querySelector(".msg").innerText="Match is draw";
        document.getElementsByClassName("msg")[0].style.backgroundColor = "black";
    }
    else{
        if(humanwin==='rock')
        {
            huwin=compwin=='paper'?false:true;
        }
        else if (humanwin==='paper') {
            huwin=compwin==='scissor'?false:true;
        } 
      else if(humanwin==='scissor'){
            huwin=compwin==='rock'?false:true;
            
        }
        winner(huwin,humanwin,compwin);
        
    }
    

}

rock.addEventListener("click",()=>{
    let temp=compgen();
    console.log(temp);
    compare('rock',temp);
    console.log("rock");

});
paper.addEventListener("click",()=>{
    let temp=compgen();
    compare('paper',temp);
    console.log(temp);
    console.log("paper");


});
scissor.addEventListener("click",()=>{
    let temp=compgen();
    console.log(temp);
    compare('scissor',temp);
    console.log("scissor");
});

