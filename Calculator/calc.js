let decided = false;

document.querySelector('.buttons').onclick = (event) =>{

    if(event.target.className == "btn" ){
        if(decided){
            document.querySelector('.input').value = "";
            decided = false;
        }
        const key = event.target.textContent;
        document.querySelector('.input').value+= key;
    }

    if(event.target.className == "btn equals"){
        document.querySelector('.input').value += "=" + eval(document.querySelector('.input').value)
        decided = true;
    }
}