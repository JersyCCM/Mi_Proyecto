class DOMBuilder {
    constructor() {

    }

    h2(title) {
        const h2 = document.createElement('h2');
        h2.textContent = title;
        return h2;
    }
    h3(price) {
        const h3 = document.createElement('h3');
        h3.textContent = price;
        return h3;
    }

    img(src) {
        const img = document.createElement('img');
        img.src = src;
        return img;
    }

    p(content) {
        const p = document.createElement('p');
        p.textContent = content;

        return p
    }

    button(content, className, id) {
        const button = document.createElement('button');
        button.textContent = content;
        button.classList.add(className);
        button.setAttribute('data-id', id);
        return button;
    }

}