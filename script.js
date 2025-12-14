let car = document.getElementById('car')

let posleft = 0
let posTop = 0

document.addEventListener('keydown', (e) => {
    //   вперед D
    if (e.keyCode == 68) {
        posleft += 10
        car.style.marginLeft = posleft + 'px'
        car.style.transform = 'rotate(90deg)'
    }

    //  а это вниз
    else if (e.keyCode == 83) {
        posTop += 10
        car.style.marginTop = posTop + 'px'
        car.style.transform = 'rotate(180deg)'
    }

    // это верх
    else if (e.keyCode == 87) {
        posTop -= 10
        car.style.marginTop = posTop + 'px'
        car.style.transform = 'rotate(0deg)'
    }
           
    // а это вниз
    else if (e.keyCode == 65) {
        posleft -= 10
        car.style.marginLeft = posleft + 'px'
        car.style.transform = 'rotate(270deg)'
    }

})

