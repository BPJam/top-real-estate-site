const numSlidesToAdd = 3;

const styleElement = document.createElement('style');
styleElement.type = 'text/css';
styleElement.id = 'slideTransfStyle';

for (let i = 1; i <= numSlidesToAdd; i++) {
    let selector = `#slide${i}:checked ~ .main-section-reviews-items-slider > .slide${i}`;
    let styles = `
        opacity: 1;
        z-index: 1;
        -webkit-transform: translateX(0%);
        -moz-transform: translateX(0%);
        -o-transform: translateX(0%);
        transform: translateX(0%);
    `;
    
    let newStyle = document.createTextNode(`${selector} { ${styles} }`);

    styleElement.appendChild(newStyle);

    selector = `#slide${i}:checked ~ .slides-control label:nth-of-type(${i})`;
    styles = `
        background: #788d58;
    `;

    newStyle = document.createTextNode(`${selector} { ${styles} }`);

    styleElement.appendChild(newStyle);
}

document.head.appendChild(styleElement);

