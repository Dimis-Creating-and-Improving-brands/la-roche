const body = document.querySelector('body');
const accessibility = document.querySelector('.accessibility-block');

let contrastIndex = 0;
const contrasts = ['light', 'dark', 'gray', 'inverted'];

let sizeIndex = 0;
const sizes = [1, 1.25, 1.5, 1.75, 2];

let spacing = 1;
const maxSpacing = 5;

function changeContrast(index) {
    contrastIndex = index;
    const selectedContrast = contrasts[index];
    body.classList.remove(...contrasts);
    body.classList.add(selectedContrast);
}

function incrementContrast() {
    console.log(`called: ${contrastIndex}`)
    if(contrastIndex + 1 >= contrasts.length) return;
    changeContrast(contrastIndex + 1);
}

function decrementContrast() {
    console.log(`called: ${contrastIndex}`)
    if(contrastIndex - 1 < 0) return;
    changeContrast(contrastIndex - 1);
}

function setCssVariables(size, spacing) {
    body.style.setProperty(`--font-size`, size)
    body.style.setProperty(`--letter-spacing`, spacing)
}

function incrementSize() {
    if(sizeIndex + 1 >= sizes.length) return;
    sizeIndex += 1;
    setCssVariables(sizes[sizeIndex], spacing);
}

function decrementSize() {
    if(sizeIndex - 1 < 0) return;
    sizeIndex -= 1;
    setCssVariables(sizes[sizeIndex], spacing);
}

function incrementSpacing() {
    if(spacing + 1 > maxSpacing) return;
    spacing += 1;
    setCssVariables(sizes[sizeIndex], spacing);
}

function decrementSpacing() {
    if(spacing - 1 < 1) return;
    spacing -= 1;
    setCssVariables(sizes[sizeIndex], spacing);
}

function linkOutlineChange() {
    body.classList.toggle('link-outlined');
}

function toggleAccessibility(value) {
    if(value) accessibility.classList.remove('hide');
    else accessibility.classList.add('hide')
}

const popupOpenedAtKey = "opened_at";

function canOpenPopup() {
    const lastOpened = localStorage.getItem(popupOpenedAtKey);
    if(!lastOpened) return true;
    const twoWeeksInMs = 1000 * 60 * 60 * 24 * 14;
    const lastOpenedDateInMs = new Date(lastOpened).getTime();
    const currentTimeInMs = new Date().getTime();
    return (currentTimeInMs - lastOpenedDateInMs) > twoWeeksInMs
}

function openPopupIfCan() {
    if(!canOpenPopup()) return;
    document.body.classList.add('active-popup');
    localStorage.setItem(popupOpenedAtKey, new Date().toISOString());
}

if(canInitPopup) openPopupIfCan();
