let chooseInput= document.querySelectorAll('.searchButton');
let chooseSearch= document.querySelectorAll('.search')
chooseSearch.forEach((element)=>{
    element.addEventListener('focus',(event)=>{
        event.target.parentElement.style.border= "blue 3px solid"
    });
    element.addEventListener('blur',(event)=>{
        event.target.parentElement.style.border="black 2px solid"
    })
})
chooseInput.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        event.target.style.backgroundColor= "black";
        event.target.style.color="white";
        setTimeout(()=>{
            event.target.style.backgroundColor= "rgb(239,239,239)";
            event.target.style.color="black";
        },100)
        if(!event.target.previousElementSibling.value){
            event.stopImmediatePropagation();
            let insertDiv= document.createElement('div');
            insertDiv.style.display='inline-block'
            insertDiv.innerHTML="Please enter something to perform a search";
            event.target.parentElement.parentElement.append(insertDiv)
            setTimeout(()=>{
                insertDiv.remove()
            },1000)
        }
    })
})
