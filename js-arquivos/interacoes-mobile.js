
function menuMResize(){
if(window.innerWidth <= '600'){
    let header = document.querySelector("#header")
    header.style.display = 'grid'
}
else{
    list.style.display = 'flex'
}

}

window.addEventListener('load', menuMResize)
window.addEventListener('resize', menuMResize)

// Criando a função para menu Hamburguer 

let burguer = document.querySelector("#menu-mobile")
let list = document.querySelector("#list")

function menu(){
    if(list.classList === 'classListOff'){
        list.setAttribute('class', 'classListOn')
    }
    else{
        list.setAttribute('class', 'classListOff')
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

//if(window.innerWidth <= '600'){
function botaoHome(){
    if(window.innerWidth <= '600'){
        if(header.style.display === 'none' && main.style.display === 'flex'){
            header.style.display = 'grid'
            main.style.display = 'none'
        }
    }
}
btHome.addEventListener('touchend', botaoHome)
btHome.addEventListener('click', botaoHome)

// Função Portifolio 

function botaoPortifolio(){
    if(window.innerWidth <= '600'){
        if(main.style.display === 'none' && header.style.display === 'grid'){
            main.style.display = 'flex'
            header.style.display = 'none'
        } 
    }
}

btPortifolio.addEventListener('touchend', botaoPortifolio)
btPortifolio.addEventListener('click', botaoPortifolio)

<<<<<<< HEAD
function menuMResize(){
    if(window.innerWidth >= 600 && list.style.display === 'none'){
        list.style.display = 'grid'
    }
    if(window.innerWidth <= '600'){
        header.style.display = 'grid'
    }  
    }
    
    window.addEventListener('load', menuMResize)
    window.addEventListener('resize', menuMResize)



=======

>>>>>>> parent of 6939104 (JS 1..3.2)
function bugResize(){
    if(window.innerWidth <= 600){
        if(header.style.display === 'grid' && main.style.display === 'flex'){
            header.style.display = 'none'
            main.style.display = 'flex'
        }
    }
}

<<<<<<< HEAD
window.addEventListener('resize', bugResize)

// Remoção para otimização e correção de bug 04.03.2024 // 

/* function menuMResize(){
if(window.innerWidth <= '600'){
    let header = document.querySelector("#header")
    header.style.display = 'grid'
}
else{
    list.style.display = 'flex'
}

}

window.addEventListener('load', menuMResize)
window.addEventListener('resize', menuMResize) */

//-----------------------------------------------------------------//

=======
window.addEventListener('resize', bugResize)
>>>>>>> parent of 6939104 (JS 1..3.2)
