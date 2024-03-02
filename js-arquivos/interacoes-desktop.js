
let navp = document.querySelector("#principal")
let li = document.getElementsByClassName('button')



//Adicionando classe ao header para desktop 
if(window.innerWidth >= '601'){
    let list = document.querySelector("#list")
    let header = document.querySelector("#header")
    list.style.display = 'grid'
    header.classList.add('headerClass')
}


// Classe para navMenu
function menuResize(){
    if(window.innerWidth >= '601' && window.innerWidth <= '900'){
        navp.classList.add('entreSeisNove')
        navp.classList.remove('acimaNove')
        
    }
    if(window.innerWidth >=901){
        navp.classList.add('acimaNove')
        navp.classList.remove('entreSeisNove')
        li.style.paddingLeft = '15px' 
    }
}

window.addEventListener('load', menuResize)
window.addEventListener('resize', menuResize)