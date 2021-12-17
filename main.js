
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'styles.css');
document.head.appendChild(link);


const main = document.createElement("div");
const keysContainer = document.createElement("div");
let textArea = document.createElement('textarea');
const comment = document.createElement('h3'), comment2 = document.createElement('h3');



main.classList.add('wraper');
keysContainer.classList.add('keys');

comment.textContent = 'The keyboard is created in the Windows operating system';
comment2.textContent = 'To switch the language, the combination: left ctrl + alt';



main.appendChild(textArea);




let currLenguage = localStorage.getItem('lenguage');
console.log(currLenguage);



let mainKeyboard;

if(currLenguage == 'english'){
    mainKeyboard = [
        "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\","Delete",
        "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
        "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "ArrowUp", "ShiftRight",
        "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"
    ];
}else{
    mainKeyboard = [
        "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
        "Tab", "ქ", "წ", "ე", "რ", "ტ", "ყ", "უ", "ი", "ო", "პ", "[", "]", "\\","Delete",
        "CapsLock", "ა", "ს", "დ", "ფ", "გ", "ჰ", "ჯ", "კ", "ლ", ";", "'", "Enter",
        "ShiftLeft", "ზ", "ხ", "ც", "ვ", "ბ", "ნ", "მ", ",", ".", "/", "ArrowUp", "ShiftRight",
        "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"
    ]
}



function createKeys(keysArr) {
    const fragment = document.createDocumentFragment();
    keysArr.forEach(key => {
        const keyElement = document.createElement('button');
        switch(key) {
            case 'ShiftLeft':
                keyElement.setAttribute('value', key);
                keyElement.textContent = 'Shift';
                break;
            case 'ShiftRight':
                keyElement.setAttribute('value', key);
                keyElement.textContent = 'Shift';
                break;
            case 'ControlLeft':
                keyElement.setAttribute('value', key);
                keyElement.textContent = 'Ctrl';
                break;
            case 'ControlRight':
                keyElement.setAttribute('value', key);
                keyElement.textContent = 'Ctrl';
                break;
            case 'AltLeft':
                keyElement.setAttribute('value', key);
                keyElement.textContent = 'Alt';
                break;
            case 'AltRight':
                keyElement.setAttribute('value', key);
                keyElement.textContent = 'Alt';
                break;
            case 'Delete':
                keyElement.setAttribute('value', key);
                keyElement.textContent = 'Del';
                break;
            case 'MetaLeft':
                keyElement.setAttribute('value', key);
                keyElement.textContent = 'Win';
                break;
            case 'ArrowLeft':
                keyElement.setAttribute('value', key);
                keyElement.textContent = '◄';
                break;
            case 'ArrowUp':
                keyElement.setAttribute('value', key);
                keyElement.textContent = '▲';
                break;
            case 'ArrowDown':
                keyElement.setAttribute('value', key);
                keyElement.textContent = '▼';
                break;
            case 'ArrowRight':
                keyElement.setAttribute('value', key);
                keyElement.textContent = '►';
                break;
            case 'ქ':
                keyElement.setAttribute('value', 'q');
                keyElement.textContent = 'ქ';
                break;
            case 'წ':
                keyElement.setAttribute('value', 'w');
                keyElement.textContent = 'წ';
                break;
            case 'ე':
                keyElement.setAttribute('value', 'e');
                keyElement.textContent = 'ე';
                break;
            case 'რ':
                keyElement.setAttribute('value', 'r');
                keyElement.textContent = 'რ';
                break;
            case 'ტ':
                keyElement.setAttribute('value', 't');
                keyElement.textContent = 'ტ';
                break;
            case 'ყ':
                keyElement.setAttribute('value', 'y');
                keyElement.textContent = 'ყ';
                break;
            case 'უ':
                keyElement.setAttribute('value', 'u');
                keyElement.textContent = 'უ';
                break;
            case 'ი':
                keyElement.setAttribute('value', 'i');
                keyElement.textContent = 'ი';
                break;
            case 'ო':
                keyElement.setAttribute('value', 'o');
                keyElement.textContent = 'ო';
                break;
            case 'პ':
                keyElement.setAttribute('value', 'p');
                keyElement.textContent = 'პ';
                break;
            case 'ა':
                keyElement.setAttribute('value', 'a');
                keyElement.textContent = 'ა';
                break;
            case 'ს':
                keyElement.setAttribute('value', 's');
                keyElement.textContent = 'ს';
                break;
            case 'დ':
                keyElement.setAttribute('value', 'd');
                keyElement.textContent = 'დ';
                break;
            case 'ფ':
                keyElement.setAttribute('value', 'f');
                keyElement.textContent = 'ფ';
                break;
            case 'გ':
                keyElement.setAttribute('value', 'g');
                keyElement.textContent = 'გ';
                break;
            case 'ჰ':
                keyElement.setAttribute('value', 'h');
                keyElement.textContent = 'ჰ';
                break;
            case 'ჯ':
                keyElement.setAttribute('value', 'j');
                keyElement.textContent = 'ჯ';
                break;
            case 'კ':
                keyElement.setAttribute('value', 'k');
                keyElement.textContent = 'კ';
                break;
            case 'ლ':
                keyElement.setAttribute('value', 'l');
                keyElement.textContent = 'ლ';
                break;
            case 'ზ':
                keyElement.setAttribute('value', 'z');
                keyElement.textContent = 'ზ';
                break;
            case 'ხ':
                keyElement.setAttribute('value', 'x');
                keyElement.textContent = 'ხ';
                break;
            case 'ც':
                keyElement.setAttribute('value', 'c');
                keyElement.textContent = 'ც';
                break;
            case 'ვ':
                keyElement.setAttribute('value', 'v');
                keyElement.textContent = 'ვ';
                break;
            case 'ბ':
                keyElement.setAttribute('value', 'b');
                keyElement.textContent = 'ბ';
                break;
            case 'ნ':
                keyElement.setAttribute('value', 'n');
                keyElement.textContent = 'ნ';
                break;
            case 'მ':
                keyElement.setAttribute('value', 'm');
                keyElement.textContent = 'მ';
                break;
            default:
                keyElement.setAttribute('value', key);
                keyElement.textContent = key;
        }
        
        
        keyElement.setAttribute('type', 'button');
        if(key.length > 1 || key === '▲' || key === "◄" || key === "▼" || key === "►") {
            keyElement.classList.add('key', 'dark-key', key)
        }else {
            keyElement.classList.add('key', key);
        }
        fragment.appendChild(keyElement);
    });

    return fragment;
}


keysContainer.appendChild(createKeys(mainKeyboard));
main.appendChild(keysContainer);
main.appendChild(comment);
main.appendChild(comment2);
document.body.appendChild(main);




let capsLockBtn = document.querySelector('.CapsLock');
let shiftLeftBtn = document.querySelector('.ShiftLeft');
let shiftRightBtn = document.querySelector('.ShiftRight');
let ctrlLeft = document.querySelector('.ControlLeft');
let altLeft = document.querySelector('.AltLeft');
let altRight = document.querySelector('.AltRight');
let backSpace = document.querySelector('.Backspace');
let deleteBtn = document.querySelector('.Delete');
let enterBtn = document.querySelector('.Enter');
let spaceBtn = document.querySelector('.Space');
let tabBtn = document.querySelector('.Tab');
let ctrlRight = document.querySelector('.ControlRight')
let winBtn = document.querySelector('.MetaLeft')


window.addEventListener('keydown', (e) => {
    if(e.code == 'CapsLock'){
        capsLockBtn.classList.toggle('active');
        currLenguage = localStorage.getItem('lenguage');
        if(currLenguage == 'english'){
            if(capsLockBtn.classList.contains('active')){
                document.querySelectorAll('.key').forEach(key => {
                    upperFunc(key);
                });
            }else{
                document.querySelectorAll('.key').forEach(key => {
                    lowerFunc(key);
                });
            }
        }else {
            console.log('hi')
            return ;
        }
    }else if(e.code == 'ShiftLeft') {
        shiftLeftBtn.classList.add('active');
        if(currLenguage == 'english'){
            if(capsLockBtn.classList.contains('active')){
                shiftFunc(lowerFunc);
            }else{
                shiftFunc(upperFunc)
            }
        }else{
            shiftGeo();
        }
    }else if(e.code == 'ShiftRight') {
        shiftRightBtn.classList.add('active');
        if(currLenguage == 'english'){
            if(capsLockBtn.classList.contains('active')){
                shiftFunc(lowerFunc);
            }else{
                shiftFunc(upperFunc)
            }
        }else{
            shiftGeo();
        }
    }else if(e.code == 'ControlLeft') {
        ctrlLeft.classList.add('active');
    }else if(ctrlLeft.classList.contains('active') && e.code == 'AltLeft'){
        altLeft.classList.add('active');
        if(currLenguage == 'english'){
            localStorage.setItem('lenguage', 'georgian');
            currLenguage = localStorage.getItem('lenguage');
            geoLeng();
        }else{
            localStorage.setItem('lenguage', 'english');
            currLenguage = localStorage.getItem('lenguage');
            engLeng();
        }
    }else if(ctrlLeft.classList.contains('active') && e.code == 'AltRight'){
        altRight.classList.add('active');
        if(currLenguage == 'english'){
            localStorage.setItem('lenguage', 'georgian');
            currLenguage = localStorage.getItem('lenguage');
            geoLeng();
        }else{
            localStorage.setItem('lenguage', 'english');
            currLenguage = localStorage.getItem('lenguage');
            engLeng();
        }
    }else if(e.code == 'AltLeft'){
        altLeft.classList.add('active');
    }else if(e.code == 'AltRight'){
        altRight.classList.add('active');
    }else if(e.code == 'ControlRight'){
        ctrlRight.classList.add('active');
    }else if(e.code == 'Backspace'){
        backSpace.classList.add('active');
        if(currLenguage == 'english'){
            engLeng();
        }else{
            geoLeng();
        }
    }else if(e.code == 'Space'){
        spaceBtn.classList.add('active');
    }else if(e.code == 'Tab'){
        tabBtn.classList.add('active');
        tabFunc();
    }else if(e.code == 'Enter'){
        enterBtn.classList.add('active');
    }else{
        for (let key of document.querySelectorAll('.key')){
            if( e.key.toLowerCase() == key.getAttribute('value').toLowerCase()){
                key.classList.add('active');
                textArea.textContent += key.textContent;
            }
        }
    }
})



window.addEventListener('keyup', (e) => {
    for(let key of document.querySelectorAll('.key')){
        if(e.code == 'ShiftLeft') {
            shiftLeftBtn.classList.remove('active');
            if(currLenguage == 'english'){
                if(capsLockBtn.classList.contains('active')){
                    unShift(upperFunc);
                }else{
                    unShift(lowerFunc);
                }
            }else{
                unShiftGeo();
            }
        }else if(e.code == 'ShiftRight') {
            shiftRightBtn.classList.remove('active');
            if(currLenguage == 'english'){
                if(capsLockBtn.classList.contains('active')){
                    unShift(upperFunc);
                }else{
                    unShift(lowerFunc);
                }
            }else{
                unShiftGeo();
            }
        }else if(e.code == 'Tab'){
            tabBtn.classList.remove('active');
            textArea.focus()
        }else if(e.code == 'Enter'){
           enterBtn.classList.remove('active');
           textArea.focus();
        }else if(e.code == 'CapsLock'){
            return;
        }else{
             if (! key.classList.contains('CapsLock')) {
                key.classList.remove('active')
            };
        }

    }
})






capsLockBtn.addEventListener('click', () => {
    capsLockBtn.classList.toggle('active');
    if(currLenguage == 'english') {
        if(capsLockBtn.classList.contains('active')){
            document.querySelectorAll('.key').forEach(key => {
                upperFunc(key);
            });
        }else{
            document.querySelectorAll('.key').forEach(key => {
                lowerFunc(key);
            });
            
        }
    }else {
        return;
    }
});

 
function upperFunc(k){
    k.value.length < 2 ? k.textContent = k.textContent.toUpperCase() : k;
}

function lowerFunc(k){
    k.value.length < 2 ? k.textContent = k.textContent.toLowerCase() : k;
}






backSpace.addEventListener('mousedown', backSpaceFunc);


function backSpaceFunc() {
    backSpace.classList.add('active');
    let textValue = textArea.value.split('');
    let start = textArea.selectionStart;
    if(start == 0){
        return;
    }else{
        textValue.splice(start - 1, 1);
        textArea.textContent = textValue.join('');
        textArea.focus();
        let caretPos = start - 1;
        textArea.setSelectionRange(caretPos, caretPos);
    }
}



backSpace.addEventListener('mouseup', () => {
    backSpace.classList.remove('active');
    textArea.focus();
})




deleteBtn.addEventListener('mousedown', deleteFunc);


function deleteFunc(){
    deleteBtn.classList.add('active');
    let textValue = textArea.value.split('');
    let start = textArea.selectionStart;
    let end = textArea.selectionEnd;
    if(end == 0 && textValue.length == 0){
        return
    }else{
        textValue.splice(start, 1);
        textArea.textContent = textValue.join('');
        textArea.focus();
        let caretPos = start;
        textArea.setSelectionRange(caretPos, caretPos);
    }
}


deleteBtn.addEventListener('mouseup', () => {
    deleteBtn.classList.remove('active');
    textArea.focus();
})






enterBtn.addEventListener('mousedown', enter);

function enter() {
    enterBtn.classList.add('active');
    let textValue = textArea.value.split('');
    let start = textArea.selectionStart;
    textValue.splice(start, 0, '\n');
    textArea.textContent = textValue.join('');
    textArea.focus();
    let caretPos = start + 1;
    textArea.setSelectionRange(caretPos, caretPos); 
}


enterBtn.addEventListener('mouseup', () => {
    enterBtn.classList.remove('active');
    textArea.focus();
})




spaceBtn.addEventListener('mousedown', space);

function space() {
    spaceBtn.classList.add('active');
    let textValue = textArea.value.split('');
    let start = textArea.selectionStart + textArea.value.length;
    textValue.splice(start, 0, ' ');
    textArea.textContent = textValue.join('');
    textArea.focus();
    let caretPos = start + 1;
    textArea.setSelectionRange(caretPos, caretPos); 
}



spaceBtn.addEventListener('mouseup', () => {
    spaceBtn.classList.remove('active');
    textArea.focus();
})


tabBtn.addEventListener('mousedown', tabFunc);

function tabFunc() {
    tabBtn.classList.add('active');
    let textValue = textArea.value.split('');
    let start = textArea.selectionStart;
    textValue.splice(start, 0, '   ');
    textArea.textContent = textValue.join('');
    textArea.focus();
    let caretPos = start + 3;
    textArea.setSelectionRange(caretPos, caretPos);
}


tabBtn.addEventListener('mouseup', () => {
    tabBtn.classList.remove('active');
    textArea.focus();
})



shiftRightBtn.addEventListener('mousedown', () => {
    shiftRightBtn.classList.add('active');
    if(currLenguage == 'english'){
        if(capsLockBtn.classList.contains('active')){
            shiftFunc(lowerFunc);
        }else{
            shiftFunc(upperFunc)
        }
    }else{
        shiftGeo();
    }
});


shiftLeftBtn.addEventListener('mousedown', () => {
    shiftLeftBtn.classList.add('active')
    if(currLenguage == 'english'){
        if(capsLockBtn.classList.contains('active')){
            shiftFunc(lowerFunc);
        }else{
            shiftFunc(upperFunc)
        }
    }else{
        shiftGeo();
    }    
});


ctrlRight.addEventListener('mousedown', () =>{
    ctrlRight.classList.add('active');
})
ctrlRight.addEventListener('mouseup', () =>{
    ctrlRight.classList.remove('active');
})

ctrlLeft.addEventListener('mousedown', () =>{
    ctrlLeft.classList.add('active');
})
ctrlLeft.addEventListener('mouseup', () =>{
    ctrlLeft.classList.remove('active');
})

altLeft.addEventListener('mousedown', () =>{
    altLeft.classList.add('active');
})
altLeft.addEventListener('mouseup', () =>{
    altLeft.classList.remove('active');
})


altRight.addEventListener('mousedown', () =>{
    altRight.classList.add('active');
})
altRight.addEventListener('mouseup', () =>{
    altRight.classList.remove('active');
})


winBtn.addEventListener('mousedown', () =>{
    winBtn.classList.add('active');
})
winBtn.addEventListener('mouseup', () =>{
    winBtn.classList.remove('active');
})


shiftRightBtn.addEventListener('mouseup', () => {
    shiftRightBtn.classList.remove('active');
    if(currLenguage == 'english'){
        if(capsLockBtn.classList.contains('active')){
            unShift(upperFunc);
        }else{
            unShift(lowerFunc);
        }
    }else{
        unShiftGeo();
    }
});


shiftLeftBtn.addEventListener('mouseup', () => {
    shiftLeftBtn.classList.remove('active');
    if(currLenguage == 'english'){
        if(capsLockBtn.classList.contains('active')){
            unShift(upperFunc);
        }else{
            unShift(lowerFunc);
        }
    }else{
        unShiftGeo();
    }
});






for (let k of document.querySelectorAll('.key')){
    if(k.textContent.length < 2){
        k.addEventListener('mousedown', (e) => {
            if(e.target.textContent.toLowerCase() == k.textContent.toLowerCase()){
                k.classList.add('active');
                textArea.innerHTML += k.textContent;
                let start = textArea.selectionStart;
                textArea.focus();
                textArea.setSelectionRange(start + textArea.value.length, start + textArea.value.length);
            }
        });
        
    }
}

for (let k of document.querySelectorAll('.key')){
    if(k.textContent.length < 2){
        k.addEventListener('mouseup', (e) => {
            if(e.target.textContent == k.textContent){
                k.classList.remove('active');
                textArea.focus();
                
            }
        });
        
    }
}



function geoLeng(){
    document.querySelectorAll('.key').forEach(key => {
        switch (key.textContent) {
            case 'q':
                key.textContent = 'ქ'
                key.value = 'q';
                break;
            case 'w':
                key.textContent = 'წ'
                key.value = 'w';
                break;
            case 'e':
                key.textContent = 'ე'
                key.value = 'e';
                break;
            case 'r':
                key.textContent = 'რ'
                key.value = 'r';
                break;
            case 't':
                key.textContent = 'ტ'
                key.value = 't';
                break;
            case 'y':
                key.textContent = 'ყ'
                key.value = 'y';
                break;
            case 'u':
                key.textContent = 'უ'
                key.value = 'u';
                break;
            case 'i':
                key.textContent = 'ი'
                key.value = 'i';
                break;
            case 'o':
                key.textContent = 'ო'
                key.value = 'o';
                break;
            case 'p':
                key.textContent = 'პ'
                key.value = 'p';
                break;
            case 'a':
                key.textContent = 'ა'
                key.value = 'a';
                break;
            case 's':
                key.textContent = 'ს'
                key.value = 's';
                break;
            case 'd':
                key.textContent = 'დ'
                key.value = 'd';
                break;
            case 'f':
                key.textContent = 'ფ'
                key.value = 'f';
                break;
            case 'g':
                key.textContent = 'გ'
                key.value = 'g';
                break;
            case 'h':
                key.textContent = 'ჰ'
                key.value = 'h';
                break;
            case 'j':
                key.textContent = 'ჯ'
                key.value = 'j';
                break;
            case 'k':
                key.textContent = 'კ'
                key.value = 'k';
                break;
            case 'l':
                key.textContent = 'ლ'
                key.value = 'l';
                break;
            case 'z':
                key.textContent = 'ზ'
                key.value = 'z';
                break;
            case 'x':
                key.textContent = 'ხ'
                key.value = 'x';
                break;
            case 'c':
                key.textContent = 'ც'
                key.value = 'c';
                break;
            case 'v':
                key.textContent = 'ვ'
                key.value = 'v';
                break;
            case 'b':
                key.textContent = 'ბ'
                key.value = 'b';
                break;
            case 'n':
                key.textContent = 'ნ'
                key.value = 'n';
                break;
            case 'm':
                key.textContent = 'მ'
                key.value = 'm';
                break;
            default:
                key;
        }
    })
}


function engLeng(){
    document.querySelectorAll('.key').forEach(key => {
        switch (key.textContent) {
            case 'ქ':
                key.textContent = 'q'
                key.value = 'q';
                break;
            case 'წ':
                key.textContent = 'w';
                key.value = 'w';
                break;
            case 'ე':
                key.textContent = 'e';
                key.value = 'e';
                break;
            case 'რ':
                key.textContent = 'r';
                key.value = 'r';
                break;
            case 'ტ':
                key.textContent = 't';
                key.value = 't';
                break;
            case 'ყ':
                key.textContent = 'y'
                key.value = 'y';
                break;
            case 'უ':
                key.textContent = 'u'
                key.value = 'u';
                break;
            case 'ი':
                key.textContent = 'i'
                key.value = 'i';
                break;
            case 'ო':
                key.textContent = 'o';
                key.value = 'o';
                break;
            case 'პ':
                key.textContent = 'p';
                key.value = 'p';
                break;
            case 'ა':
                key.textContent = 'a';
                key.value = 'a';
                break;
            case 'ს':
                key.textContent = 's'
                key.value = 's';
                break;
            case 'დ':
                key.textContent = 'd';
                key.value = 'd';
                break;
            case 'ფ':
                key.textContent = 'f';
                key.value = 'f';
                break;
            case 'გ':
                key.textContent = 'g';
                key.value = 'g';
                break;
            case 'ჰ':
                key.textContent = 'h';
                key.value = 'h';
                break;
            case 'ჯ':
                key.textContent = 'j';
                key.value = 'j';
                break;
            case 'კ':
                key.textContent = 'k';
                key.value = 'k';
                break;
            case 'ლ':
                key.textContent = 'l';
                key.value = 'l';
                break;
            case 'ზ':
                key.textContent = 'z';
                key.value = 'z';
                break;
            case 'ხ':
                key.textContent = 'x';
                key.value = 'x';
                break;
            case 'ც':
                key.textContent = 'c';
                key.value = 'c';
                break;
            case 'ვ':
                key.textContent = 'v';
                key.value = 'v';
                break;
            case 'ბ':
                key.textContent = 'b';
                key.value = 'b';
                break;
            case 'ნ':
                key.textContent = 'n';
                key.value = 'n';
                break;
            case 'მ':
                key.textContent = 'm';
                key.value = 'm';
                break;
            default:
                key;
        }
    })
}













function shiftFunc(callBack){
    document.querySelectorAll('.key').forEach(key => {
        switch (key.textContent) {
            case '`':
                key.textContent = '~';
                key.value = '~';
                break;
            case '1':
                key.textContent = '!'
                key.value = '!';
                break;
            case '2':
                key.textContent = '@'
                key.value = '@';
                break;
            case '3':
                key.textContent = '#'
                key.value = '#';
                break;
            case '4':
                key.textContent = '$'
                key.value = '$';
                break;
            case '5':
                key.textContent = '%'
                key.value = '%';
                break;
            case '6':
                key.textContent = '^'
                key.value = '^';
                break;
            case '7':
                key.textContent = '&'
                key.value = '&';
                break;
            case '8':
                key.textContent = '*'
                key.value = '*';
                break;
            case '9':
                key.textContent = '('
                key.value = '(';
                break;
            case '0':
                key.textContent = ')'
                key.value = ')';
                break;
            case '-':
                key.textContent = '_'
                key.value = '_';
                break;
            case '=':
                key.textContent = '+'
                key.value = '+';
                break;
            case '[':
                key.textContent = '{'
                key.value = '{';
                break;
            case ']':
                key.textContent = '}'
                key.value = '}';
                break;
            case '\\':
                key.textContent = '|'
                key.value = '|';
                break;
            case ';':
                key.textContent = ':'
                key.value = ':';
                break;
            case '\'':
                key.textContent = '"'
                key.value = '"';
                break;
            case ',':
                key.textContent = '<'
                key.value = '<';
                break;
            case '.':
                key.textContent = '>'
                key.value = '>';
                break;
            case '/':
                key.textContent = '?'
                key.value = '?';
                break;
            default:
                callBack(key);
        }
    })
}


function shiftGeo(){
    document.querySelectorAll('.key').forEach(key => {
        switch (key.textContent) {
            case '`':
                key.textContent = '~'
                key.value = '~'; 
                break;
            case '1':
                key.textContent = '!'
                key.value = '!';
                break;
            case '2':
                key.textContent = '@'
                key.value = '@';
                break;
            case '3':
                key.textContent = '#'
                key.value = '#';
                break;
            case '4':
                key.textContent = '$'
                key.value = '$';
                break;
            case '5':
                key.textContent = '%'
                key.value = '%';
                break;
            case '6':
                key.textContent = '^'
                key.value = '^';
                break;
            case '7':
                key.textContent = '&'
                key.value = '&';
                break;
            case '8':
                key.textContent = '*';
                key.value = '*';
                break;
            case '9':
                key.textContent = '(';
                key.value = '(';
                break;
            case '0':
                key.textContent = ')'
                key.value = ')';
                break;
            case '-':
                key.textContent = '_'
                key.value = '_';
                break;
            case '=':
                key.textContent = '+'
                key.value = '+';
                break;
            case '[':
                key.textContent = '{'
                key.value = '{';
                break;
            case ']':
                key.textContent = '}'
                key.value = '}';
                break;
            case ' \\':
                key.textContent = '|'
                key.value = '~';
                break;
            case ';':
                key.textContent = ':'
                key.value = ':';
                break;
            case '\'':
                key.textContent = '"'
                key.value = '"';
                break;
            case ',':
                key.textContent = '<'
                key.value = '<';
                break;
            case '.':
                key.textContent = '>'
                key.value = '>';
                break;
            case '/':
                key.textContent = '?'
                key.value = '?';
                break;
            case 'წ':
                key.textContent = 'ჭ';
                key.value = 'w';
                break;
            case 'რ':
                key.textContent = 'ღ'
                key.value = 'r';
                break;
            case 'ტ':
                key.textContent = 'თ';
                key.value = 't';
                break;
            case 'ს':
                key.textContent = 'შ'
                key.value = 's';
                break;
            case 'ჯ':
                key.textContent = 'ჟ';
                key.value = 'j';
                break;
            case 'ზ':
                key.textContent = 'ძ';
                key.value = 'z';
                break;
            case 'ც':
                key.textContent = 'ჩ';
                key.value = 'c';
                break;
            default:
                key;
        }
    })
}


function unShiftGeo(){
    document.querySelectorAll('.key').forEach(key => {
        switch (key.textContent) {
            case '~':
                key.textContent = '`';
                key.value = '`';
                break;
            case '!':
                key.textContent = '1';
                key.value = '1';
                break;
            case '@':
                key.textContent = '2';
                key.value = '2';
                break;
            case '#':
                key.textContent = '3'
                key.value = '3';
                break;
            case '$':
                key.textContent = '4'
                key.value = '4';
                break;
            case '%':
                key.textContent = '5'
                key.value = '5';
                break;
            case '^':
                key.textContent = '6';
                key.value = '6';
                break;
            case '&':
                key.textContent = '7'
                key.value = '7';
                break;
            case '*':
                key.textContent = '8'
                key.value = '8';
                break;
            case '(':
                key.textContent = '9'
                key.value = '9';
                break;
            case ')':
                key.textContent = '0'
                key.value = '0';
                break;
            case '_':
                key.textContent = '-'
                key.value = '-';
                break;
            case '+':
                key.textContent = '='
                key.value = '=';
                break;
            case '{':
                key.textContent = '[';
                key.value = '[';
                break;
            case '}':
                key.textContent = ']'
                key.value = ']';
                break;
            case '|':
                key.textContent = '\\';
                key.value = '\\';
                break;
            case ':':
                key.textContent = ';'
                key.value = ';';
                break;
            case '"':
                key.textContent = '\''
                key.value = '\'';
                break;
            case '<':
                key.textContent = ','
                key.value = ',';
                break;
            case '>':
                key.textContent = '.'
                key.value = '.';
                break;
            case '?':
                key.textContent = '/';
                key.value = '/';
                break;
            case 'ჭ':
                key.textContent = 'წ';
                key.value = 'w';
                break;
            case 'ღ':
                key.textContent = 'რ';
                key.value = 'r';
                break;
            case 'თ':
                key.textContent = 'ტ';
                key.value = 't';
                break;
            case 'შ':
                key.textContent = 'ს';
                key.value = 's';
                break;
            case 'ჟ':
                key.textContent = 'ჯ';
                key.value = 'j';
                break;
            case 'ძ':
                key.textContent = 'ზ';
                key.value = 'z';
                break;
            case 'ჩ':
                key.textContent = 'ც';
                key.value = 'c';
                break;
            default:
                key;
        }
    })
}







function unShift(callBack){
    document.querySelectorAll('.key').forEach(key => {
        switch (key.textContent) {
            case '~':
                key.textContent = '`'
                key.value = '`';
                break;
            case '!':
                key.textContent = '1'
                key.value = '1';
                break;
            case '@':
                key.textContent = '2'
                key.value = '2';
                break;
            case '#':
                key.textContent = '3'
                key.value = '3';
                break;
            case '$':
                key.textContent = '4'
                key.value = '4';
                break;
            case '%':
                key.textContent = '5'
                key.value = '5';
                break;
            case '^':
                key.textContent = '6'
                key.value = '6';
                break;
            case '&':
                key.textContent = '7'
                key.value = '7';
                break;
            case '*':
                key.textContent = '8'
                key.value = '8';
                break;
            case '(':
                key.textContent = '9'
                key.value = '9';
                break;
            case ')':
                key.textContent = '0'
                key.value = '0';
                break;
            case '_':
                key.textContent = '-'
                key.value = '-';
                break;
            case '+':
                key.textContent = '='
                key.value = '=';
                break;
            case '{':
                key.textContent = '['
                key.value = '[';
                break;
            case '}':
                key.textContent = ']'
                key.value = ']';
                break;
            case '|':
                key.textContent = '\\'
                key.value = '\\';
                break;
            case ':':
                key.textContent = ';'
                key.value = ';';
                break;
            case '"':
                key.textContent = '\''
                key.value = '\'';
                break;
            case '<':
                key.textContent = ','
                key.value = ',';
                break;
            case '>':
                key.textContent = '.'
                key.value = '.';
                break;
            case '?':
                key.textContent = '/'
                key.value = '/';
                break;
            default:
                callBack(key);
        }
    })
}






