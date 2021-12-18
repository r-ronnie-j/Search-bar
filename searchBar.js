let findingParent = (obj, className) => {
    let c = obj;
    while (!(c.classList.contains(className)) || c.tagName === 'body') {
        c = c.parentElement
    }
    if (c.className == 'body') {
        return undefined;
    }
    else {
        return c;
    }
}
let hidingIcon = document.querySelectorAll('.hiding-icon');
let hidingitem = document.querySelectorAll('.hiding-item');
window.addEventListener('resize', () => {
    if (window.innerWidth < 640) {
        for (let i = 0; i < hidingitem.length; i++) {
            hidingitem[i].style.display = "none"
        }
        for (let i = 0; i < hidingIcon.length; i++) {
            hidingIcon[i].style.display = "inline-block"
        }
    } else {
        for (let i = 0; i < hidingitem.length; i++) {
            hidingitem[i].style.display = "inline-block"
        }
        for (let i = 0; i < hidingIcon.length; i++) {
            hidingIcon[i].style.display = 'none'
            let parent=findingParent(hidingIcon[i],'flexContainer0');
            console.log(parent.children.length)
            for(let j=parent.children.length;j>1;){
                parent.children[1].remove();
            }
        }
    }
})
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 640) {
        for (let i = 0; i < hidingitem.length; i++) {
            hidingitem[i].style.display = "none"
        }
        for (let i = 0; i < hidingIcon.length; i++) {
            hidingIcon[i].style.display = "inline-block"
        }
    } else {
        for (let i = 0; i < hidingitem.length; i++) {
            hidingitem[i].style.display = "inline-block"
        }
        for (let i = 0; i < hidingIcon.length; i++) {
            hidingIcon[i].style.display = 'none'
        }
    }
})
for (let i = 0; i < hidingIcon.length; i++) {
    hidingIcon[i].addEventListener('click', (event) => {
        //parent stores the DOM element as a overall parent
        let parent = findingParent(event.target, 'flexContainer1');
        let elementCount = parent.parentElement.children.length
        for (let j = 0; j < parent.children.length; j++) {
            //parentFlex stores the value of the element that gives us the value of the element that give us individual flex item
            let parentFlex = parent.children[j];
            for (let k = 0; k < parentFlex.children.length; k++) {
                if (parentFlex.children[k].classList.contains('hiding-item')) {
                    if (elementCount === 1) {
                        let div = document.createElement('div')
                        div.classList.add('flexBar0item');
                        div.innerHTML = parentFlex.children[k].innerHTML;
                        parent.parentElement.append(div);
                    } else {
                        parent.parentElement.children[1].remove();
                    }
                }
            }
        }
    })
}