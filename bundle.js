function tabsClick(event, tab) {
    //triangle
    let triangles = document.getElementsByClassName('triangle-doencas')
    let tabsDoencas = document.getElementsByClassName('tabs-doencas')
    let titulos = tabsDoencas[0].querySelectorAll('[class^="tabs-titulos"]')
    Array.prototype.forEach.call(triangles, function (elm) {
        elm.classList.remove('active')
    })
    Array.prototype.forEach.call(titulos, function (elm) {
        elm.classList.remove('texto-azul')
        elm.classList.add('branco')
    })
    let currentTriangle = document.getElementById(`triangle-${event.target.dataset.tab}`)
    currentTriangle.classList.add('active')
    let currentTitulo = document.getElementsByClassName(`tabs-titulos-${event.target.dataset.tab}`)
    currentTitulo[0].classList.add('texto-azul')
    // content
    let tabs = document.getElementsByClassName('tabs-doencas-content')
    Array.prototype.forEach.call(tabs, function (tb) {
        tb.classList.remove('active')
    })
    let currentTab = document.getElementById(tab)
    currentTab.classList.add('active')
}

// todas funções e mudanças que são carregadas quando a página está sendo carregada
window.onload = function () {
    defineContainer()
    window.addEventListener('resize', function () {
        defineContainer()
    })
    // inserir abaixo código que deve ser carregado junto da página
    // sempre validar para não ocorrer erros por não existir o elemento que está sendo manipulado
    agendar({'origem': document.getElementById('send'), 'destino' : document.getElementById('source'), 'token': document.getElementById('token'), 'botao': document.querySelector('.agendar button')})
    /* Removendo as informações do codigo */
    document.getElementById('configEmail').remove()
}

function defineContainer() {
    if (window.innerWidth < 769) {
        resolutionChange(true)
    } else {
        resolutionChange(false)
    }
}

function resolutionChange(value) {
    let div = document.getElementsByClassName('agendamento')
    if (value) {
        div[0].firstElementChild.classList.remove('container')
    } else {
        div[0].firstElementChild.classList.add('container')
    }
}