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
        p.textContent = document.querySelector('.input').value
        document.querySelector('.history').append(p);
    }

    if(event.target.className == "btn clearAll"){
        document.querySelector('.input').value = "";
    }

    if(event.target.className == "btn clearEl"){
        document.querySelector('.input').value = document.querySelector('.input').value.slice(0,-1);
    }
}


const keys = ['1', '2', '3', '4', '5','6', '7', '8', '9', '0', '(', ')', '+', '-','*','/','.']
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if(keys.includes(key)){
        if(decided){
            document.querySelector('.input').value = "";
            decided = false;
        }
        document.querySelector('.input').value+= key;
    }
    if(key == "Enter"){
        document.querySelector('.input').value += "=" + eval(document.querySelector('.input').value)
        decided = true;
        let p = document.createElement("p");
        p.textContent = document.querySelector('.input').value
        document.querySelector('.history').append(p);
    }
    if(key == "Backspace"){
        document.querySelector('.input').value = document.querySelector('.input').value.slice(0,-1);
    }
})

document.querySelector('.ClearHis').onclick = (event) => {
    document.querySelector('.history').innerHTML = '<p>History:</p>';
}
