const blueBars = document.querySelectorAll('.blue-bar')

blueBars.forEach(bar => {
    bar.style.width= `${bar.textContent.split(' ')[0]}%`
})