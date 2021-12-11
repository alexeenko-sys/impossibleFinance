const filterBox = document.querySelectorAll('.main-block__item')
const tabs = document.querySelectorAll('.main-block__tab')

document.querySelector('.main-block__tabs').addEventListener('click', event => {
    if(event.target.tagName !== 'LI') return false
    tabs.forEach(elem => {
        elem.classList.remove('main-block__tab_active')
    })
    event.target.classList.add('main-block__tab_active')
    let filterClass = event.target.dataset['filter']
    filterBox.forEach(elem => {
        elem.classList.remove('hide')
        if(!elem.classList.contains(filterClass)) {
            elem.classList.add('hide')
        }
    })
})

function burgerMenu() {
    let menu = document.querySelector('.burger-menu')
    let button = document.querySelector('.burger-menu__button')
    let links = document.querySelector('.burger-menu__link')

    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu()
    })
    links.addEventListener('click', ()=> toggleMenu())
    function toggleMenu() {
        menu.classList.toggle('burger-menu_active')
        if(menu.classList.contains('burger-menu_active')) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }
}
burgerMenu()