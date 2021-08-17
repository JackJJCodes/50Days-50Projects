const toggles = document.querySelector('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change', () => doTheTrick(e.target)));

function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked) {
        if (good === clickedOne) {
            fast.checked = false;
        }

        if (cheap === theClickedOne) {
            good.checked = false;
        }

        if (fast === theClickedOne) {
            cheap.checked = false;
        }
    }
}