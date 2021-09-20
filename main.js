const counts = {
    first: 0,
    second: 1,
    third: 2
}

const css = document.documentElement.style

const firstButton = document.getElementById('first-button')
const secondButton = document.getElementById('second-button')
const thirdButton = document.getElementById('third-button')

const buttonPages = [firstButton, secondButton, thirdButton]

function pageStylesControl (pages, counts) {
    for(let index = 0; index < pages.length; index++) {
        const currentButton = pages[index]

        currentButton.addEventListener('click', () => {
            css.setProperty('--page-no', index)
        })
    }
}

pageStylesControl(buttonPages, counts)

