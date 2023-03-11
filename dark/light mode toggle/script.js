let maincontainer = document.getElementById('maincontainer')
let innercircle = document.getElementById('innercircle')
let body = document.querySelector('body')
let brightlogo = document.getElementById('brightlogo')
let nightlogo = document.getElementById('nightlogo')
nightlogo.style.display = "none"


maincontainer.addEventListener('click', () => {

    if (maincontainer.style.justifyContent == 'start') {

        maincontainer.style.justifyContent = 'end'
        innercircle.style.margin = ' 3px 6px 3px 5px'
        body.style.background = "#2b2b2b"
        maincontainer.style.borderColor = "white"
        innercircle.style.borderColor = "white"
        brightlogo.style.display = "none"
        nightlogo.style.display = "block"
    }
    else {

        maincontainer.style.justifyContent = 'start'
        body.style.background = "aliceblue"
        maincontainer.style.borderColor = "black"
        innercircle.style.borderColor = "black"
        nightlogo.style.display = "none"
        brightlogo.style.display = "block"
    }

})
