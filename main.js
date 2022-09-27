const colorItems = document.querySelectorAll('.color-item');

colorItems.forEach(colorItem => {
    colorItem.onchange = (e) => {
        console.log(123);
    }
})