function updateButtons(activeId) {
    const buttons = ['button1', 'button2', 'button3'];
    buttons.forEach(id => {
        const btn = document.getElementById(id);
        if (id === activeId) {
            btn.style.background = 'burlywood';
            btn.style.fontFamily = 'sans-serif';
        } else {
            btn.style.background = '#fff';
            btn.style.fontFamily = 'cursive';
        }
    });
}

function imachange1() {
    // Line-Line Fault
    document.getElementById('image1').src = 'Line-Line.png'; 
    updateButtons('button1');
}

function imachange2() {
    // Line-Ground Fault
    document.getElementById('image1').src = 'Line-Ground.png'; 
    updateButtons('button2');
}

function imachange3() {
    // No-Fault
    document.getElementById('image1').src = 'Nofault.png';
    updateButtons('button3');
}

