
document.querySelector('.buttons').onclick = (event) =>{

    if(event.target.className == "btn"){
        const key = event.target.textContent;
        console.log(key);
    }
}