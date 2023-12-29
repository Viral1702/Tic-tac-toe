let btns = document.querySelectorAll(".btn");
let count = 0;
let msg = document.querySelector("#msg");
let text = document.querySelector("#text");
for(let btn of btns){
let fun = btn.addEventListener("click",() =>{
    if(count%2 === 0){
        btn.innerText = "O";
        count++;
    }else{
        btn.innerText = "X";
        count++;
    }
    Winner();
})
}
const Winner = () => {
    for (let pattern of arr) {
      let pos1Val = btns[pattern[0]].innerText;
      let pos2Val = btns[pattern[1]].innerText;
      let pos3Val = btns[pattern[2]].innerText;
      
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
        msg.classList.remove("hide");
        text.innerText = `The win is ${pos1Val}`
        for (let btn of btns) {
          btn.disabled = true;
        }
        if(count===9){
        text.innerText = `The Match was Draw`
        }
          return true;
        }
      }
    }
  };
  
let arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
   
