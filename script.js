let numViejo = 0;
let display = document.getElementById('res')
let ops;  

let resultado = false;


function getNumber(e) {
    
    if(display.innerHTML == 0 || resultado == true){
        resultado = false
        display.innerHTML = e.innerHTML 
    } else{
        display.innerHTML = display.innerHTML + e.innerHTML 
    }

}

function getOp(e){

    if( 
        (e.innerHTML == '+' || 
        e.innerHTML == 'x' || 
        e.innerHTML == '/' || 
        e.innerHTML == '-' ) &&
        (numViejo == '0')     
        )
    {
        numViejo = display.innerHTML
        display.innerHTML = '0'
        ops = e.innerHTML    
    } else {
        switch (ops) {

            case '+':              
                display.innerHTML = parseInt(numViejo) + parseInt(display.innerHTML);
                
                break;
            case '-':
                display.innerHTML = parseInt(numViejo) - parseInt(display.innerHTML); 

                break
            case 'x':
                display.innerHTML = parseInt(numViejo) * parseInt(display.innerHTML);

                break
            case '/':
                display.innerHTML = parseInt(numViejo) / parseInt(display.innerHTML);

                break
        }

        numViejo = display.innerHTML;
        ops = e.innerHTML 
        resultado = true;
    }

}

function borrar(e){

    display.innerHTML = '0'
    numViejo = '0'
    
}