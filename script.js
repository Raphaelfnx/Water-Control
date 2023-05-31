var agora = new Date()
var hour = agora.getHours()
//var min = agora.getMinutes()
var min = (agora.getMinutes()<10?'0':'') + agora.getMinutes()

const hora1 = document.getElementById('hora1')
const hora2 = document.getElementById('hora2')
const hora3 = document.getElementById('hora3')
const hora4 = document.getElementById('hora4')
const hora5 = document.getElementById('hora5')
const hora6 = document.getElementById('hora6')
const hora7 = document.getElementById('hora7')
const hora8 = document.getElementById('hora8')

let ml0 = document.querySelector('.setima')
let ml1 = document.querySelector('.sexta')
let ml2 = document.querySelector('.quinta')
let ml3 = document.querySelector('.quarta')
let ml4 = document.querySelector('.terceira')
let ml5 = document.querySelector('.segunda')
let ml6 = document.querySelector('.primeira')
let ml7 = document.querySelector('.zero')

function beber(){
    let copo = document.querySelector('.copo1')
    copo.style.background = 'blue'
    ml7.style.background = 'blue'
    //ml7.style.background = 'blue'
    hora1.innerHTML = `- Bebeu às ${hour}:${min}h`
    
}

function beber2(){
    let copo2 = document.querySelector('.copo2')
    copo2.style.background = 'blue'
    ml6.style.background = 'blue'
    hora2.innerHTML = `- Bebeu às ${hour}:${min}h`
}

function beber3(){
    let copo3 = document.querySelector('.copo3')
    copo3.style.background = 'blue'
    ml5.style.background = 'blue'
    hora3.innerHTML = `- Bebeu às ${hour}:${min}h`
}

function beber4(){
    let copo4 = document.querySelector('.copo4')
    copo4.style.background = 'blue'
    ml4.style.background = 'blue'
    hora4.innerHTML = `- Bebeu às ${hour}:${min}h`
}

function beber5(){
    let copo5 = document.querySelector('.copo5')
    copo5.style.background = 'blue'
    ml3.style.background = 'blue'
    hora5.innerHTML = `- Bebeu às ${hour}:${min}h`
}

function beber6(){
    let copo6 = document.querySelector('.copo6')
    copo6.style.background = 'blue'
    ml2.style.background = 'blue'
    hora6.innerHTML = `- Bebeu às ${hour}:${min}h`
}

function beber7(){
    let copo7 = document.querySelector('.copo7')
    copo7.style.background = 'blue'
    ml1.style.background = 'blue'
    hora7.innerHTML = `- Bebeu às ${hour}:${min}h`
}

function beber8(){
    let copo8 = document.querySelector('.copo8')
    copo8.style.background = 'blue'
    ml0.style.background = 'blue'
    hora8.innerHTML = `- Bebeu às ${hour}:${min}h`
}