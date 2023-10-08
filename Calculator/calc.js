
document.querySelector('.buttons').onclick = (event) =>{

    if(event.target.className == "btn" && event.target.className != "equals"){
        const key = event.target.textContent;
        document.querySelector('.input').value+= key;
    }
}