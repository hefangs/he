// var div1 = document.createElement('div')
// div1.className = 'demo'
// div1.style.top = 'auto'
// document.body.appendChild(div1)
// var dragging = false
// var lastX, lastY
// // 当鼠标去按下去的时候回产生2个坐标
// div1.onmousedown = function (e) {
//     lastX = e.clientX
//     lastY = e.clientY
//     dragging = true
// }
// // 当鼠标松开的时候
// div1.onmouseup = function () {
//     dragging = false
// }
// // 当鼠标移动的时候
// document.onmousemove = function (e) {
//     // console.log(e.clientX, e.clientY)
//     if (dragging === true) {
//         // 最新的坐标 = 移动之后的坐标 - 上一次鼠标移动之后的坐标
//         var deltaX = e.clientX - lastX
//         var deltaY = e.clientY - lastY
//         //top和left存在空的结果，需要进行parseInt，或者直接等于0
//         var top = parseInt(div1.style.top) || 0
//         var left = parseInt(div1.style.left) || 0
//         resultY = top + deltaY
//         resultX = left + deltaX
//         //  防止拖拽出屏幕外
//         if (resultY < 0) {
//             resultY = 0
//         }
//         if (resultX < 0) {
//             resultX = 0
//         }
//         div1.style.top = resultY + 'px'
//         div1.style.left = resultX + 'px'
//         lastX = e.clientX
//         lastY = e.clientY




var div1 = document.createElement('div')
document.body.appendChild(div1)
div1.className = 'demo'
div1.style.top = 'auto'
var dragging = false
var lastX, lastY
document.body.onmousedown = (e) => {
    // console.log(e.clientX, e.clientY)
    dragging = true
    lastX = e.clientX
    lastY = e.clientY
}
document.body.onmousemove = (e) => {
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        var resultX = deltaX + left
        var resultY = deltaY + top
        if (resultX < 0) {
            resultX = 0
        }
        if (resultY < 0) {
            resultY = 0
        }
        div1.style.top = resultY + 'px'
        div1.style.left = resultX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
    document.body.onmouseup = () => {
        dragging = false
    }
}

