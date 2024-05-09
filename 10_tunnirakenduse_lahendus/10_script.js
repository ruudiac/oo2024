const graafilineObjekt = document.getElementById('graafilineObjekt');
const muudaLaiustInput = document.getElementById('muudaLaiust');
const muudaKõrgustInput = document.getElementById('muudaKõrgust');

muudaLaiustInput.addEventListener('input', () => {
    const uusLaius = muudaLaiustInput.value + 'px';
    graafilineObjekt.style.width = uusLaius;
});

muudaKõrgustInput.addEventListener('input', () => {
    const uusKõrgus = muudaKõrgustInput.value + 'px';
    graafilineObjekt.style.height = uusKõrgus;
});
