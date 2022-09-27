const appElement = document.querySelector('#app');
const colorItems = document.querySelectorAll('.color-item');
// State để lưu màu
const state = [];

colorItems.forEach((colorItem, index) => {
    state[index] = colorItem.value;
    
    colorItem.oninput = (e) => {
        const newValue = e.target.value;

        colorItem.value = newValue;
        state[index] = newValue;

        if (index === 0) {
            appElement.style.backgroundImage = `linear-gradient(to right, ${newValue}, ${state[1]}`;
        } else {
            appElement.style.backgroundImage = `linear-gradient(to right, ${state[0]}, ${newValue}`;
        }
    }
})
