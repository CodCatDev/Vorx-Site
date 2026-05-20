const useCustomCursor = window.innerWidth >= 768 && window.matchMedia('(pointer:fine)').matches

if (!useCustomCursor) {
    document.body.classList.remove('custom-cursor-active')
} else {
    document.body.classList.add('custom-cursor-active')

    const dot = document.querySelector('.cursorTochka')
    const outline = document.querySelector('.cursorOutline')
    const interactables = document.querySelectorAll('a, button')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    let outlineX = mouseX
    let outlineY = mouseY

    let rotation = 0

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        
        dot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`
    })

    function animate() {
        outlineX += (mouseX - outlineX) * 0.15
        outlineY += (mouseY - outlineY) * 0.15
        
        rotation += 1

        outline.style.transform =
            `translate(calc(${outlineX}px - 50%), calc(${outlineY}px - 50%)) rotate(${rotation}deg)`
        
        requestAnimationFrame(animate)
    }

    animate()

    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => outline.classList.add('hovering'))
        el.addEventListener('mouseleave', () => outline.classList.remove('hovering'))
    })
}
