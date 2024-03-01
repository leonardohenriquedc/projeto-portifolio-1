// Criando a função para menu Hamburguer 

let burguer = document.querySelector("#menu-mobile")
let list = document.querySelector("#list")

function menu(){
    if(list.style.display === 'none'){
        list.style.display = 'flex'
    }
    else{
        list.style.display = 'none'
    }
}


burguer.addEventListener('click', menu)

//-----------------------------------------------

// Criando interação com menu 

let btHome = document.querySelector("#bt-home")
let btPortifolio = document.querySelector("#bt-portifolio")

let header = document.querySelector("#header")
let main = document.querySelector("#main")


// Função home 
function botaoHome(){
    if(header.style.display === 'none' && main.style.display === 'flex'){
        header.style.display = 'grid'
        main.style.display = 'none'
    }
}

btHome.addEventListener('click', botaoHome)

// Função Portifolio 

function botaoPortifolio(){
    if(main.style.display === 'none' && header.style.display === 'grid'){
        main.style.display = 'flex'
        header.style.display = 'none'
    } 
}

btPortifolio.addEventListener('click', botaoPortifolio)