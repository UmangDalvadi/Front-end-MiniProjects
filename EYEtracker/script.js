
let pupil = document.getElementsByClassName('pupil')
// console.log(pupil)
let arrpupil = Array.from(pupil)

let pupilsp = -50
let pupilrange = 100

let xstart = 0
let xend = window.innerWidth
let xcp = 0
let xfv = 0
let xrange = xend - xstart

let ystart = 0
let yend = window.innerHeight
let ycp = 0
let yfv = 0



window.addEventListener('mousemove', (event) => {
    xcp = (event.clientX) - xstart
    xfv = xcp / xrange

    yfv = event.clientY / yend

    let pxcp = pupilsp + (xfv * pupilrange)
    let pycp = pupilsp + (yfv * pupilrange)

    arrpupil.forEach((p) => {
        p.style.transform=`translate(${pxcp}px,${pycp}px)`
    })
})

window.addEventListener('resize',(event)=>{
    xend = window.innerWidth
    yend = window.innerHeight
    xrange = xend - xstart
})