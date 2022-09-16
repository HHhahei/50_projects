const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggers = window.innerHeight / 5 * 4

    boxes.forEach( box => {
        /* Element.getBoundingClientRect() 方法返回一个 DOMRect 对象，
        其提供了元素的大小及其相对于视口的位置。 */
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggers){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}