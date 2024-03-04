

let navp = document.querySelector("#principal")
let li = document.getElementsByClassName('button')
let header = document.querySelector("#header")
let main= document.querySelector("#main")


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
    if(window.innerWidth >= 901){
        navp.classList.add('acimaNove')
        navp.classList.remove('entreSeisNove')
        li.style.paddingLeft = '15px' 
    }
}

function teste(){
    if(window.innerWidth >= 601){
    list.style.display = 'flex'
    }
    else{
        list.style.display = 'none'
    }
}

window.addEventListener('load', teste)
window.addEventListener('resize', teste)

window.addEventListener('load', menuResize)
window.addEventListener('resize', menuResize)

// Ajeitando botao portifolio 

function classMain(){
    if(window.innerWidth >= 601){
        main.style.display = 'flex'
        main.setAttribute('class', 'animacaoMenu')
        header.style.display = 'none'
    }
}

function classHeader(){
    if(window.innerWidth >= 601){
    main.style.display = 'none'
    header.style.display =  'flex'
    }
}
 
let botaoHome = document.querySelector("#bt-home")
botaoHome.addEventListener('click', classHeader)

let botaoPortifolio = document.querySelector("#bt-portifolio")
botaoPortifolio.addEventListener('click', classMain)
