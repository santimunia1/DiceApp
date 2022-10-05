const random1 = Math.floor(Math.random()*6 + 1)
const random2 = Math.floor(Math.random()*6 + 1)
document.querySelector('.dice .img1').setAttribute('src',`images/dice${random1}.png`)
document.querySelector('.dice .img2').setAttribute('src',`images/dice${random2}.png`)

if (random1>random2) {
    document.querySelector('h1').textContent= 'Player1 won🎉🏆'
}
else if (random2>random1) {
    document.querySelector('h1').textContent= 'Player2 won🎉🏆'
} else {
   document.querySelector('h1').textContent= 'Draw 😌🤝' 
}
document.getElementById('btn').addEventListener('click',()=>{   
    window.location.reload()
})

