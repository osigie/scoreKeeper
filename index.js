let p1s = document.querySelector("#p1s");
let btn1 = document.querySelector("#btn1");
let counter1 = 0;

let p2s = document.querySelector("#p2s");
let btn2 = document.querySelector("#btn2");
let counter2 = 0;

let btn3 = document.querySelector("#btn3");
let inputText = document.querySelector("#inputText");
let empty = document.querySelector("#empty");



btn1.addEventListener("click", function(){
let inputText = document.querySelector("#inputText").value;
counter1++;
p1s.innerHTML = counter1;
if ( counter1 == inputText || counter1 > counter2 && counter1 > inputText){
    p1s.classList.add("green")
    btn1.setAttribute("disable", "true")
    btn2.setAttribute("disable", "true")
    winner() 
} 
})

btn2.addEventListener("click", function(){
    let inputText = document.querySelector("#inputText").value;
    counter2++;
    p2s.innerHTML = counter2;
    if ( counter2 == inputText || counter2 > counter1 && counter2 > inputText){
        p2s.classList.add("green")
        btn1.setAttribute("disable", "true")
        btn2.setAttribute("disable", "true")
        winner()
    }
   
    })
    btn3.addEventListener("click", function(){
        btn1.removeAttribute("disable")
        btn2.removeAttribute("disable")
        p1s.classList.remove("green")
        p2s.classList.remove("green")
        counter1 = 0
        counter2 = 0
        p1s.innerHTML = counter1
        p2s.innerHTML = counter2
        document.querySelector("#inputText").value = 5
        empty.innerHTML = ""


    })


    let winner = ()=> {
        if ( counter1 > counter2){
            empty.innerHTML = "player1"
        }
        else{
            empty.innerHTML = "player2"   
        }
    }