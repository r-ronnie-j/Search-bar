let breadContainer = document.querySelectorAll('.bread-Container');
let breadContent = document.querySelectorAll('.bread-content');
for (let i = 0; i < breadContainer.length; i++) {
    breadContainer[i].addEventListener('click', (event) => {
        let target;
        if (event.target.classList.contains('bread-content')) {
            target = event.target.parentElement;
        } else {
            target = event.target
        }
        if (target.style.backgroundColor === 'black') {
            target.style.backgroundColor = 'white'
            for (let j = 0; j < target.children.length; j++) {
                target.children[j].style.backgroundColor = 'black'
            }
        } else {
            target.style.backgroundColor = 'black'
            for (let j = 0; j < target.children.length; j++) {
                target.children[j].style.backgroundColor = 'white'
            }
        }
    })
}
