// Function to Hide Purpose

let rotated = false;

function rotateImage() {
    const image = document.getElementById('rotatingImage');
    const bg = document.getElementById('purpose-sds');
    const hiddentext = document.getElementById('text-purpose');
    const colortext = document.getElementById('heading-text');

    rotated = !rotated;

    if (rotated) {
        image.style.transform = 'rotate(180deg)';
        bg.style.backgroundColor = '#E79231';
        hiddentext.style.display = 'block';
        colortext.style.color = '#FFF';
    } else {
        image.style.transform = 'rotate(0deg)';
        bg.style.backgroundColor ='#BFBEBE';
        hiddentext.style.display = 'none';
        colortext.style.color = '#070B0F';
    }
}

// Function to Hide Moto

let rotation = false;

function rotateImg() {
    const image = document.getElementById('rotatingImg');
    const bg = document.getElementById('moto-sds');
    const hiddentext = document.getElementById('sds-moto');
    const colortext = document.getElementById('moto-mainheading');


    rotation = !rotation;

    if (rotation) {
        image.style.transform = 'rotate(180deg)';
        bg.style.backgroundColor = '#E79231';
        hiddentext.style.display = 'block';
        colortext.style.color = '#FFF';
    } else {
        image.style.transform = 'rotate(0deg)';
        bg.style.backgroundColor ='#BFBEBE';
        hiddentext.style.display = 'none';
        colortext.style.color = '#070B0F';
    }
}