let btn = document.querySelectorAll('button')
let input = document.querySelector('input')
let str = ""
Array.from(btn).forEach(btn => {
    btn.addEventListener('click', (btn) => {
        // console.log(btn.target.innerHTML)
        if (btn.target.innerHTML == '=') {
            str = eval(str)
            input.value = str
        }
        else if (btn.target.innerHTML == 'AC') {
            str = ""
            input.value = str
        }
        else if (btn.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length - 1)
            input.value = str
        }

        else {
            str = str + btn.target.innerHTML
            input.value = str
        }
    })
})

input.addEventListener('click', () => {
    alert("You are not able to type in display!")
})


