const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
document.body.appendChild(customCursor);

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('mousemove', (event) => {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
});

function changeCursorColorRandomWithAnimation() {
    const randomColor = getRandomColor();
    customCursor.style.backgroundColor = randomColor;
}

// Animasi warna kursor dengan transisi setiap detik
setInterval(() => {
    changeCursorColorRandomWithAnimation();
}, 1000);
