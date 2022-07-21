var div1 = document.createElement('div')
div1.className = 'demo'
div1.style.top = 'auto'
document.body.appendChild(div1)
var dragging = false
var lastX, lastY


div1.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}
div1.onmouseup = function () {
    dragging = false
}
document.onmousemove = function (e) {
    // console.log(e.clientX, e.clientY)
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        ç = left + deltaX
        resultY = top + deltaY
        resultX = left + deltaX
        if (resultY < 0) {
            resultY = 0
        }
        if (resultX < 0) {
            resultX = 0

        }

        div1.style.top = resultY + 'px'
        div1.style.left = resultX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}
