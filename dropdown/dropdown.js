let dropdownLogo = document.querySelectorAll('.dropdownlogo');
dropdownLogo.forEach((element) => {
    element.addEventListener('click', (event) => {
        element.style.backgroundColor = 'black';
        element.firstElementChild.style.borderTop = "solid rgb(231,231,231) 3px";
        element.firstElementChild.style.borderRight = "solid rgb(231,231,231) 3px";
        let dropdownChild = element.parentElement.parentElement.children;
        for (let i = 1; i < dropdownChild.length; i++) {
            if (dropdownChild[i].style.display === "inline-block") {
                dropdownChild[i].style.display = "none";
            }
            else {
                dropdownChild[i].style.display = "inline-block";
            }
        }
        setTimeout(() => {
            element.style.backgroundColor = 'rgb(231,231,231)';
            element.firstElementChild.style.borderTop = "solid black 3px";
            element.firstElementChild.style.borderRight = "solid black 3px";
        }, 200)
    })
})
let drawerItem= document.querySelectorAll('.drawer-item');
drawerItem.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        let x=event.target.innerHTML;
        event.target.innerHTML=event.target.parentElement.firstElementChild.firstElementChild.innerHTML
        event.target.parentElement.firstElementChild.firstElementChild.innerHTML=x;
        let drawerI=event.target.parentElement.children;
        for(let i=1;i<drawerI.length;i++){
            drawerI[i].style.display="none";
        }
    })
})