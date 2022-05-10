var box = document.createElement('div');
box.className = 'box';
document.body.appendChild(box);
var textarea = document.createElement('textarea');
textarea.className = "textarea";
textarea.readOnly = true;
textarea.placeholder = "смена раскладки: ctrl+alt\nсброс значения каретки - клик вне текстового окна\n\nконтакты для быстрой связи: telegram @VladislavRUS; discord: Владислав#0191";
document.body.appendChild(textarea);
class Button {
    constructor(name, id, flag) {
        this.button = document.createElement('button');
        this.button.className = name;
        box.append(this.button);
        this.button.id = id;
        this.button.register = 0;
        this.button.textContent = ')';
        this.button.flag = flag;
        this.button.big = -1;
    }
    
    on()
    {
        document.getElementById(this.button.id).style.setProperty('background-color', 'orange')
        if (this.button.flag != 1)
            {
                    var box = document.querySelector("textarea");
                    var cursorPos = box.selectionStart;
                    var textBefore = box.value.substring(0,  cursorPos);
                    var textAfter  = box.value.substring(cursorPos, box.length);
                    box.value = (textBefore + this.button.textContent + textAfter);
                    box.selectionStart = cursorPos + 1;
                    box.selectionEnd = cursorPos+1;
            }
        else
            { 
                if (this.button.id == 13)
                    {
                        var box = document.querySelector("textarea");
                        var cursorPos = box.selectionStart;
                        if (cursorPos > 0)
                        {
                            var textBefore = box.value.substring(0,  cursorPos-1);
                            var textAfter  = box.value.substring(cursorPos, box.length);
                            box.value = (textBefore + textAfter);
                            box.selectionStart = cursorPos-1;
                            box.selectionEnd = cursorPos-1;
                            
                        }
                    }
                if (this.button.id == 14)
                    {
                        var box = document.querySelector("textarea");
                        var cursorPos = box.selectionStart;
                        var textBefore = box.value.substring(0,  cursorPos);
                        var textAfter  = box.value.substring(cursorPos, box.length);
                        box.value = (textBefore + "\t" +textAfter);
                        box.selectionStart = cursorPos + 1;
                        box.selectionEnd = cursorPos+1;

                    } 
                if (this.button.id == 28)
                    {
                        var box = document.querySelector("textarea");
                        var cursorPos = box.selectionStart;
                        var textBefore = box.value.substring(0,  cursorPos);
                        var textAfter  = box.value.substring(cursorPos+1, box.length);
                        box.value = (textBefore + textAfter);
                        box.selectionStart = cursorPos;
                        box.selectionEnd = cursorPos;
                    } 
                if (this.button.id == 41)
                    {
                        var box = document.querySelector("textarea");
                        var cursorPos = box.selectionStart;
                        var textBefore = box.value.substring(0,  cursorPos);
                        var textAfter  = box.value.substring(cursorPos, box.length);
                        box.value = (textBefore + '\n' +textAfter);
                        box.selectionStart = cursorPos + 1;
                        box.selectionEnd = cursorPos+1;
                    } 
                
            }
    }
    off()
    {
        document.getElementById(this.button.id).style.setProperty('background-color', '')
    }
    text(t)
    {
        this.button.textContent = t;
        this.check();
    }
    check()
    {
        if (this.button.flag != 1) 
        {
            if (this.button.big === 1)
                this.button.textContent = this.button.textContent.toUpperCase();
            else
                this.button.textContent = this.button.textContent.toLowerCase();
        }
    }
    caps()
    {
        if (this.button.flag != 1)
        {
            this.button.big = this.button.big * (-1);
            this.check();
        }
    }

}
let buttons = [];
for (var i = 0; i < 13; i++) {
    buttons.push(new Button('button', i));
}
buttons.push(new Button('backspace button', 13, 1));
buttons.push(new Button('tab button', 14, 1));
for (var i = 0; i < 13; i++) {
    buttons.push(new Button('button', 15 + i));
}
buttons.push(new Button('del button', 28, 1));
buttons.push(new Button('caps button', 29, 1));
for (var i = 0; i < 11; i++) {
    buttons.push(new Button('button', 30 + i));
}
buttons.push(new Button('enter button', 41, 1));
buttons.push(new Button('shift button', 42, 1));
for (var i = 0; i < 11; i++) {
    buttons.push(new Button('button', (43 + i)));
}
buttons.push(new Button('shift_r button', 54, 1));
for (var i = 0; i < 3; i++) {
    buttons.push(new Button('button', 55 + i, 1));
}
buttons.push(new Button('space button', 58));
for (var i = 0; i < 5; i++) {
    if ((i == 0) || (i == 4))
        buttons.push(new Button('button', 59 + i, 1));
    else
        buttons.push(new Button('button', 59 + i));
}
lang = 0;
names = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
"Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", 
"CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
"LShift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "∆", "RShift",
"Ctrl", "WIN", "Alt", " ", "Alt", "<", "∇", ">", "Ctrl"]
names_shift = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", ,
, , , , , , , , , , , "{", "}", "|", , 
, , , , , , , , , , ":", '"', ,
, , , , , , , , "<", ">", "?", , ,
, , , , , , , , ]
names_unshift = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", ,
, , , , , , , , , , , "[", "]", "\\", , 
, , , , , , , , , , ";", "'", ,
, , , , , , , , ",", ".", "/", , ,
, , , , , , , , ]
names_ru = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
"Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", 
"CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
"LShift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "∆", "RShift",
"Ctrl", "WIN", "Alt", " ", "Alt", "<", "∇", ">", "Ctrl"]
names_ru_shift = [, "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", ,
, , , , , , , , , , , , , "/", , 
, , , , , , , , , , , , ,
, , , , , , , , , , ",", , ,
, , , , , , , , ]
names_ru_unshift = [, "1", '2', "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", ,
, , , , , , , , , , , , , "\\", , 
, , , , , , , , , , , , ,
, , , , , , , , , , ".", , ,
, , , , , , , , ]
names.forEach(function(name, i) {
    buttons[i].text(name)
})
shift_kostyl = false;
caps_kostyl = false;
window.addEventListener("keydown", function(event) {
    if ((event.ctrlKey) && (event.altKey))
        {
            lang = lang + 1;
            lang = lang % 2;
            if (lang == 1) {
                names_ru.forEach(function(name, i) {
                    buttons[i].text(name)
                })
            } else
            {
                names.forEach(function(name, i) {
                    buttons[i].text(name)
                })
            }
        }
    if (event.code == "Backquote")
        buttons[0].on();
    if (event.code == "Digit1")
        buttons[1].on();
    if (event.code == "Digit2")
        buttons[2].on();
    if (event.code == "Digit3")
        buttons[3].on();
    if (event.code == "Digit4")
        buttons[4].on();
    if (event.code == "Digit5")
        buttons[5].on();
    if (event.code == "Digit6")
        buttons[6].on();
    if (event.code == "Digit7")
        buttons[7].on();
    if (event.code == "Digit8")
        buttons[8].on();
    if (event.code == "Digit9")
        buttons[9].on();
    if (event.code == "Digit0")
        buttons[10].on();
    if (event.code == "Minus")
        buttons[11].on();
    if (event.code == "Equal")
        buttons[12].on();
    if (event.code == "Backspace")
        buttons[13].on();
    if (event.code == "Tab")
        {buttons[14].on(); event.preventDefault();} 
    if (event.code == "KeyQ")
        buttons[15].on();
    if (event.code == "KeyW")
        buttons[16].on();
    if (event.code == "KeyE")
        buttons[17].on();
    if (event.code == "KeyR")
        buttons[18].on();
    if (event.code == "KeyT")
        buttons[19].on();
    if (event.code == "KeyY")
        buttons[20].on();
    if (event.code == "KeyU")
        buttons[21].on();
    if (event.code == "KeyI")
        buttons[22].on();
    if (event.code == "KeyO")
        buttons[23].on();
    if (event.code == "KeyP")
        buttons[24].on();
    if (event.code == "BracketLeft")
        buttons[25].on();
    if (event.code == "BracketRight")
        buttons[26].on();
    if (event.code == "Backslash")
        buttons[27].on();
    if (event.code == "Delete")
        buttons[28].on();
    if (event.code == "CapsLock")
        {
            if (caps_kostyl == false)
                {buttons[29].on();
                caps_kostyl = true;}
            else
                {buttons[29].off();
                caps_kostyl = false;}
        buttons.map((button) => { button.caps();})}
    if (event.code == "KeyA")
        buttons[30].on();
    if (event.code == "KeyS")
        buttons[31].on();
    if (event.code == "KeyD")
        buttons[32].on();
    if (event.code == "KeyF")
        buttons[33].on();
    if (event.code == "KeyG")
        buttons[34].on();
    if (event.code == "KeyH")
        buttons[35].on();
    if (event.code == "KeyJ")
        buttons[36].on();
    if (event.code == "KeyK")
        buttons[37].on();
    if (event.code == "KeyL")
        buttons[38].on();
    if (event.code == "Semicolon")
        buttons[39].on();
    if (event.code == "Quote")
        buttons[40].on();
    if (event.code == "Enter")
        buttons[41].on();
    if (event.code == "ShiftLeft")
        {
            buttons[42].on(); 
            if (shift_kostyl == false)
            {
                buttons.map((button) => { button.caps();}); 
                if (lang == 0)
                {
                    names_shift.forEach(function(name, i) {
                        buttons[i].text(name)
                    })
                }
                else
                {
                    names_ru_shift.forEach(function(name, i) {
                        buttons[i].text(name)
                    })
                }
                shift_kostyl = true;
            }
            else return;
        }
    if (event.code == "KeyZ")
        buttons[43].on();
    if (event.code == "KeyX")
        buttons[44].on();
    if (event.code == "KeyC")
        buttons[45].on();
    if (event.code == "KeyV")
        buttons[46].on();
    if (event.code == "KeyB")
        buttons[47].on();
    if (event.code == "KeyN")
        buttons[48].on();
    if (event.code == "KeyM")
        buttons[49].on();
    if (event.code == "Comma")
        buttons[50].on();
    if (event.code == "Period")
        buttons[51].on();
    if (event.code == "Slash")
        buttons[52].on();
    if (event.code == "ArrowUp")
        buttons[53].on();
    if (event.code == "ShiftRight")
    {
        buttons[54].on(); 
            if (shift_kostyl == false)
            {
                buttons.map((button) => { button.caps();}); 
                if (lang == 0)
                {
                    names_shift.forEach(function(name, i) {
                        buttons[i].text(name)
                    })
                }
                else
                {
                    names_ru_shift.forEach(function(name, i) {
                        buttons[i].text(name)
                    })
                }
                shift_kostyl = true;
            }
            else return;
    }
    if (event.code == "ControlLeft")
        buttons[55].on();
    if (event.code == "MetaLeft")
        buttons[56].on();
    if (event.code == "AltLeft")
        {buttons[57].on(); event.preventDefault();}
    if (event.code == "Space")
        buttons[58].on();
    if (event.code == "AltRight")
        {buttons[59].on(); event.preventDefault();}
    if (event.code == "ArrowLeft")
        buttons[60].on();
    if (event.code == "ArrowDown")
        buttons[61].on();
    if (event.code == "ArrowRight")
        buttons[62].on();
    if (event.code == "ControlRight")
        buttons[63].on();
}, true);

window.addEventListener("keyup", function(event) {
    if (event.code == "Backquote")
        buttons[0].off();
    if (event.code == "Digit1")
        buttons[1].off();
    if (event.code == "Digit2")
        buttons[2].off();
    if (event.code == "Digit3")
        buttons[3].off();
    if (event.code == "Digit4")
        buttons[4].off();
    if (event.code == "Digit5")
        buttons[5].off();
    if (event.code == "Digit6")
        buttons[6].off();
    if (event.code == "Digit7")
        buttons[7].off();
    if (event.code == "Digit8")
        buttons[8].off();
    if (event.code == "Digit9")
        buttons[9].off();
    if (event.code == "Digit0")
        buttons[10].off();
    if (event.code == "Minus")
        buttons[11].off();
    if (event.code == "Equal")
        buttons[12].off();
    if (event.code == "Backspace")
        buttons[13].off();
    if (event.code == "Tab")
        {buttons[14].off(); event.preventDefault();}
    if (event.code == "KeyQ")
        buttons[15].off();
    if (event.code == "KeyW")
        buttons[16].off();
    if (event.code == "KeyE")
        buttons[17].off();
    if (event.code == "KeyR")
        buttons[18].off();
    if (event.code == "KeyT")
        buttons[19].off();
    if (event.code == "KeyY")
        buttons[20].off();
    if (event.code == "KeyU")
        buttons[21].off();
    if (event.code == "KeyI")
        buttons[22].off();
    if (event.code == "KeyO")
        buttons[23].off();
    if (event.code == "KeyP")
        buttons[24].off();
    if (event.code == "BracketLeft")
        buttons[25].off();
    if (event.code == "BracketRight")
        buttons[26].off();
    if (event.code == "Backslash")
        buttons[27].off();
    if (event.code == "Delete")
        buttons[28].off();
    if (event.code == "CapsLock")
        {}
    if (event.code == "KeyA")
        buttons[30].off();
    if (event.code == "KeyS")
        buttons[31].off();
    if (event.code == "KeyD")
        buttons[32].off();
    if (event.code == "KeyF")
        buttons[33].off();
    if (event.code == "KeyG")
        buttons[34].off();
    if (event.code == "KeyH")
        buttons[35].off();
    if (event.code == "KeyJ")
        buttons[36].off();
    if (event.code == "KeyK")
        buttons[37].off();
    if (event.code == "KeyL")
        buttons[38].off();
    if (event.code == "Semicolon")
        buttons[39].off();
    if (event.code == "Quote")
        buttons[40].off();
    if (event.code == "Enter")
        buttons[41].off();
    if (event.code == "ShiftLeft")
        {buttons[42].off(); buttons.map((button) => { button.caps();});
        if (lang == 0)
            {
                names_unshift.forEach(function(name, i) {
                    buttons[i].text(name)
                })
            }
            else
            {
                names_ru_unshift.forEach(function(name, i) {
                    buttons[i].text(name)
                })
            }
        shift_kostyl = false;}
    if (event.code == "KeyZ")
        buttons[43].off();
    if (event.code == "KeyX")
        buttons[44].off();
    if (event.code == "KeyC")
        buttons[45].off();
    if (event.code == "KeyV")
        buttons[46].off();
    if (event.code == "KeyB")
        buttons[47].off();
    if (event.code == "KeyN")
        buttons[48].off();
    if (event.code == "KeyM")
        buttons[49].off();
    if (event.code == "Comma")
        buttons[50].off();
    if (event.code == "Period")
        buttons[51].off();
    if (event.code == "Slash")
        buttons[52].off();
    if (event.code == "ArrowUp")
        buttons[53].off();
    if (event.code == "ShiftRight")
        {buttons[54].off(); buttons.map((button) => { button.caps();});
        if (lang == 0)
            {
                names_unshift.forEach(function(name, i) {
                    buttons[i].text(name)
                })
            }
            else
            {
                names_ru_unshift.forEach(function(name, i) {
                    buttons[i].text(name)
                })
            }
        shift_kostyl = false;}
    if (event.code == "ControlLeft")
        buttons[55].off();
    if (event.code == "MetaLeft")
        buttons[56].off();
    if (event.code == "AltLeft")
        buttons[57].off();
    if (event.code == "Space")
        buttons[58].off();
    if (event.code == "AltRight")
        buttons[59].off();
    if (event.code == "ArrowLeft")
        buttons[60].off();
    if (event.code == "ArrowDown")
        buttons[61].off();
    if (event.code == "ArrowRight")
        buttons[62].off();
    if (event.code == "ControlRight")
        buttons[63].off();
}, true);
document.querySelectorAll('button.button').forEach(function(name, i) {
    name.addEventListener('mousedown', event => {
        if ((i == 42) || (i == 54))
            {
                if (shift_kostyl == false)
                    {
                        buttons[i].on();
                        shift_kostyl = true;
                        buttons.map((button) => { button.caps();});
                    }
                else {
                    buttons[i].off();
                    shift_kostyl = false;
                    buttons.map((button) => { button.caps();});
                }
            }
        else if (i == 29)
            {
                if (caps_kostyl == false)
                    {
                        buttons[i].on();
                        caps_kostyl = true;
                        buttons.map((button) => { button.caps();});
                    }
                else {
                    buttons[i].off();
                    caps_kostyl = false;
                    buttons.map((button) => { button.caps();});
                }
            }
        else
            {
                buttons[i].on();
                if (shift_kostyl == true)
                    buttons.map((button) => { button.caps();});
                shift_kostyl = false;
                buttons[42].off();
                buttons[54].off();
            }
    })
})
document.querySelectorAll('button.button').forEach(function(name, i) {
    name.addEventListener('mouseup', event => {
        if ((i == 42) || (i == 54))
            {
            }
        else if (i == 29)
            {
            }
        else
            {
                buttons[i].off();
            }
    })
})
