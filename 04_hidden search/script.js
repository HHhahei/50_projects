const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    // active如果存在则删除，不存在则添加
    search.classList.toggle('active')
    console.log(search.classList)
    // 点击按钮后input获得聚焦
    input.focus()
})