let trends = document.querySelectorAll(".trends");
let button = document.querySelectorAll(".cart");
let  cards = document.querySelectorAll(".card");

let count = 0;

trends.forEach((curElem, index)=>{
    curElem.style.left=`${index*100}%`;
})


const myFun  = ( ) =>{
    trends.forEach((curImg)=>{
        curImg.style.transform=`translateX(-${count * 100}%)`
    })
     
}

setInterval(()=>{
    count++;
    if(count == trends.length){
        count=0
    }
    myFun()
},3000)


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// cart
button.forEach((curBtn)=>{
    curBtn.addEventListener("click", function(){
        alert("Added To Cart")
    })
})


// card detail
cards.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${curCard.firstElementChild.src} alt="">
        <h1>Fresh Foods</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae odio velit mollitia nulla inventore asperiores fuga. Quasi, eius nemo. Blanditiis, consequatur sunt.</p>

        `
        document.querySelector("body").appendChild(div)
        document.getElementById("icon").addEventListener("click", function(){
            div.remove();
        })
    })
})