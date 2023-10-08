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
        let p = document.createElement("p");
        p = document.querySelector('.input').value
        document.querySelector('.history').append(p);
    }

    if(event.target.className == "btn clearAll"){
        document.querySelector('.input').value = "";
    }

    if(event.target.className == "btn clearEl"){
        document.querySelector('.input').value = document.querySelector('.input').value.slice(0,-1);
    }
}