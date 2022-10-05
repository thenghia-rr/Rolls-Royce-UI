const list = document.querySelecterAll('span')
var index = 0

setInterval((e) => {
    list.forEach((e) => {
        e.classList.remove('change-properties')
    })
    list[index].classList.add('change-properties')
    index++ 
    if( index ==list.length){
        index = 0
    }
},200)