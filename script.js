let container = document.querySelector(".container")
let container3 = document.querySelector(".container3")
let conatainer2 = document.querySelector(".conatainer2")
let cls1 = document.querySelector(".cls1")
let cls2 = document.querySelector(".cls2")
let cls3 = document.querySelector(".cls3")
let img = document.querySelector(".img")
let texts = document.querySelector(".texts")
let holderNumber = document.querySelector("#holder-number")
let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let date = document.querySelector("#date")
let cards = document.querySelector(".cards")
let errors = document.querySelector(".errors")


// inputs
let inp1 = document.querySelector("#inp1")
let inp2 = document.querySelector("#inp2")
let inp4 = document.querySelector("#inp4")
let inp6 = document.querySelector("#inp6")
let inp5 = document.querySelector("#inp5")
let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")
let error = document.querySelector("#error")
let error2 = document.querySelector("#error2")
let error3 = document.querySelector("#error3")


// ---------------------------------------------------------------





let arr = [];

if(inp1 !== "") {
    inp1.addEventListener("keyup", function() {
        p1.innerHTML = inp1.value;
         if(inp1.value === "") {
            p1.innerHTML = `Jane Appleseed`
         }   
    })
   
}

if(inp2 !== "") {
    inp2.addEventListener("keyup", function() {
        arr.push(inp2.value)
        for(let i = 0 ; i < arr.length ; i++) {
            holderNumber.innerHTML = ` ${arr[i]}  `
        }
     if(inp2.value === "") {
    
        holderNumber.innerHTML = `0000 0000 0000 0000`
     }   
    })
}

let pro = [];

if(inp6 !== "") {
    inp6.addEventListener("keyup", function() {
        p2.innerHTML = `${inp6.value} /`;
        
    pro.push(p2.innerHTML);

        if(inp4.value || inp6.value === "") {
    p2.innerHTML = `00/00`
 }   

    }) 

    let pro2 = [];

   if(inp4 !== "" ) {
    inp4.addEventListener("keyup", function() {
        p2.innerHTML = "";
        pro2.push(p2.innerHTML);
        p2.innerHTML = `${inp6.value} / ${inp4.value}`;
    }) 
   } 
}

    let pro3 = [];

   if(inp5 !== "" ) {
    inp5.addEventListener("keyup", function() {
        pro3.push(date.innerHTML);
        date.innerHTML = inp5.value
    }) 
   } 

btn.addEventListener("click",function(){   
    let rejexemail = /\w+\s\w+[^0-9]/ig
    let getValid = rejexemail.test(inp1.value);
    if(getValid === false) {
    console.log("false")
    }else if(getValid === true){
        console.log("true")
    }

    
    // check

   

    if(inp2.value.length > 20 || inp2.value === "") {
        holderNumber.innerHTML = `0000 0000 0000 0000`
        error.style.display = "block"
        inp2.style.marginBottom = "1%";
        error.style.marginBottom = "2%";
        inp2.style.border = "1px solid red"
    }  else if(inp2.value.length === 19){
        error.style.display = "none"
        inp2.style.marginBottom = "3%";
        inp2.style.border = "1px solid green"
        container.classList.add("active")
    }

    if(inp6.value.length > 2 || inp6.value > 12) {
        error2.style.display = "block";
        inp6.style.border = "1px solid red"
        
    } else if(inp6.value.length === 2 && inp6.value <= 12) {
        cls1.classList.add("act")
        error2.style.display = "none";
        inp6.style.border = "1px solid green"
        error3.style.marginLeft = "20%"
    }
    if(inp4.value === "" && inp6.value === "") {
        inp6.style.border = "1px solid red"
        inp4.style.border = "1px solid red"
        error2.style.display = "block";
    } else if(inp4.value === "") {
        inp4.style.border = "1px solid red";
        error2.style.display = "block";
    } else if (inp6.value === "") {
        inp6.style.border = "1px solid red";
        error2.style.display = "block";
    }
    
    if (inp4.value.length > 4 ) {
        inp4.style.border = "1px solid red";
        error2.style.display = "block";
        p2.innerHTML = "00/00"
    } else if (inp4.value.length === 4 && inp4.value.length === 4 ) {
        img.classList.add("active3");
        inp4.style.border = "1px solid green";
        error2.style.display = "none";
    }


    if (inp5.value === "") {
        error3.style.display = "block"
        inp5.style.border = "1px solid red";
    } else if(inp5.value.length > 4 && typeof inp5.value === "string" && inp4.value.length !== 3 || inp4.value.length !== 4) {
        error3.style.display = "block"
        inp5.style.border = "1px solid red";
    } else if(inp5.value.length <= 4  && inp5.value.length === 3 || inp5.value.length === 4 ){
        error3.style.display = "none"
        inp5.style.border = "1px solid green";
        cls2.classList.add("active4")
    }
    

    if(container.getAttribute("class") === "container active" && cls1.getAttribute("class") === "cls1 act" && img.getAttribute("class") === "img active3" && cls2.getAttribute("class") === "cls2 active4") {
       conatainer2.style.display = "none"; 
       container3.style.display = "flex"; 
       holderNumber.innerHTML = "0000 0000 0000 0000";
       p1.innerHTML = "Jane Appleseed";
       p2.innerHTML = "00/00";
       date.innerHTML = "000";
    }
        
}) 
btn2.onclick = function() {
    location.reload()
}
