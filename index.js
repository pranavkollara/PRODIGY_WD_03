let grid1 = document.getElementById("grid1");
let grid2 = document.getElementById("grid2");
let grid3 = document.getElementById("grid3");
let grid4 = document.getElementById("grid4");
let grid5 = document.getElementById("grid5");
let grid6 = document.getElementById("grid6");
let grid7 = document.getElementById("grid7");
let grid8 = document.getElementById("grid8");
let grid9 = document.getElementById("grid9");
let startBtn = document.getElementById("start");

let g1;
let g2;
let g3;
let g4;
let g5;
let g6;
let g7;
let g8;
let g9;

let turn = ["X", "O"];

let i = 0;


let game = false;

startBtn.addEventListener('click',()=>{
    grid1.classList.remove("disable");
    grid2.classList.remove("disable");
    grid3.classList.remove("disable");
    grid4.classList.remove("disable");
    grid5.classList.remove("disable");
    grid6.classList.remove("disable");
    grid7.classList.remove("disable");
    grid8.classList.remove("disable");
    grid9.classList.remove("disable");
    game = true;
    if (game) {
        grid1.addEventListener("click", () => {
          document.getElementById("grid1").innerHTML = turn[i % 2];
          g1 = turn[i % 2];
          i++;
          grid1.classList.remove("hidden");
          grid1.classList.add("used");
          win();
          
        });
      
        grid2.addEventListener("click", () => {
          document.getElementById("grid2").innerHTML = turn[i % 2];
          g2 = turn[i % 2];
          i++;
          grid2.classList.remove("hidden");
          grid2.classList.add("used");
          win();
        });
      
        grid3.addEventListener("click", () => {
          document.getElementById("grid3").innerHTML = turn[i % 2];
          g3 = turn[i % 2];
          i++;
          grid3.classList.remove("hidden");
          grid3.classList.add("used");
          win();
        });
      
        grid4.addEventListener("click", () => {
          document.getElementById("grid4").innerHTML = turn[i % 2];
          g4 = turn[i % 2];
          i++;
          grid4.classList.remove("hidden");
          grid4.classList.add("used");
          win();
        });
      
        grid5.addEventListener("click", () => {
          document.getElementById("grid5").innerHTML = turn[i % 2];
          g5 = turn[i % 2];
          i++;
          grid5.classList.remove("hidden");
          grid5.classList.add("used");
        });
      
        grid6.addEventListener("click", () => {
          document.getElementById("grid6").innerHTML = turn[i % 2];
          g6 = turn[i % 2];
          i++;
          grid6.classList.remove("hidden");
          grid6.classList.add("used");
          win();
        });
      
        grid7.addEventListener("click", () => {
          document.getElementById("grid7").innerHTML = turn[i % 2];
          g7 = turn[i % 2];
          i++;
          grid7.classList.remove("hidden");
          grid7.classList.add("used");
          win();
        });
      
        grid8.addEventListener("click", () => {
          document.getElementById("grid8").innerHTML = turn[i % 2];
          g8 = turn[i % 2];
          i++;
          grid8.classList.remove("hidden");
          grid8.classList.add("used");
          win();
        });
      
        grid9.addEventListener("click", () => {
          document.getElementById("grid9").innerHTML = turn[i % 2];
          g9 = turn[i % 2];
          i++;
          grid9.classList.remove("hidden");
          grid9.classList.add("used");
          win();
        });
      }
      
})




function win() {

if(i==9){
        console.log("draw")
    }

  if (g1 === "X" && g2 === "X" && g3 === "X") {
    game = false;
    console.log("USER 1 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g4 === "X" && g5 === "X" && g6 === "X") {
    game = false;
    console.log("USER 1 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g7 === "X" && g8 === "X" && g9 === "X") {
    game = false;
    console.log("USER 1 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g1 === "X" && g4 === "X" && g7 === "X") {
    game = false;
    console.log("USER 1 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g2 === "X" && g5 === "X" && g8 === "X") {
    game = false;
    console.log("USER 1 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g3 === "X" && g6 === "X" && g9 === "X") {
    game = false;
    console.log("USER 1 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g1 === "X" && g5 === "X" && g9 === "X") {
    game = false;
    console.log("USER 1 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g3 === "X" && g5 === "X" && g7 === "X") {
    game = false;
    console.log("USER 1 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  //For User 2
  if (g1 === "O" && g2 === "O" && g3 === "O") {
    game = false;
    console.log("USER 2 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g4 === "O" && g5 === "O" && g6 === "O") {
    game = false;
    console.log("USER 2 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g7 === "O" && g8 === "O" && g9 === "O") {
    game = false;
    console.log("USER 2 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g1 === "O" && g4 === "O" && g7 === "O") {
    game = false;
    console.log("USER 2 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g2 === "O" && g5 === "O" && g8 === "O") {
    game = false;
    console.log("USER 2 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g3 === "O" && g6 === "O" && g9 === "O") {
    game = false;
    console.log("USER 2 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g1 === "O" && g5 === "O" && g9 === "O") {
    game = false;
    console.log("USER 2 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
  if (g3 === "O" && g5 === "O" && g7 === "O") {
    game = false;
    console.log("USER 2 WON");
    grid1.classList.add("used");
    grid2.classList.add("used");
    grid3.classList.add("used");
    grid4.classList.add("used");
    grid5.classList.add("used");
    grid6.classList.add("used");
    grid7.classList.add("used");
    grid8.classList.add("used");
    grid9.classList.add("used");
  }
}




