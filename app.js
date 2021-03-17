let screen = document.querySelector('#screen');
let buttons = document.querySelectorAll('button');
let  screenValue = '';

for(let item of buttons){
    item.addEventListener('click', function(e){
        buttontext = e.target.innerText;
       


        if(buttontext == 'X'){
            
            buttontext = '*';
            screenValue += buttontext
            screen.value = screenValue;
        }
        else if(buttontext == 'C') {
            screenValue = ' ';
            screen.value = screenValue;

        }
        else if(buttontext == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttontext;
            screen.value = screenValue;
        }

    

    } )
}