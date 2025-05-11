
let list = document.querySelectorAll("ul li")
let ex = document.querySelector(".experiment")


if(window.localStorage.getItem("color")){
    ex.style.backgroundColor = window.localStorage.getItem('color') ;
    
    list.forEach((li) => {
        li.classList.remove("active")
    });

    document.querySelector(`[data-color = '${window.localStorage.getItem('color')}']`).classList.add("active")

   
}else{
   
}
list.forEach((li) => {
    li.addEventListener("click",(e) => {
        //console.log(e.currentTarget.dataset.color)
        //remove active class from all li 
        
        // add active for currentTarget
        e.currentTarget.classList.add("active")
        // add color to localstorage
        window.localStorage.setItem("color",e.currentTarget.dataset.color ) 
        // Change the background-color of experment

        ex.style.backgroundColor = window.localStorage.color
    })
} )