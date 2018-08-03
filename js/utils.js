function twoCats() {

    let cat1 = new Cat();
    cat1.setName('Cookie');
    cat1.setImageRoute('assets/cat1.jpg');

    let cat2 = new Cat();
    cat2.setName('Blue');
    cat2.setImageRoute('assets/cat2.jpg');

    let cats = [];

    cats.push(cat1, cat2);

    for ( let cat of cats ) {

        let catDiv = document.createElement("div");
        catDiv.id = cat.getName();
        document.body.appendChild(catDiv);

        let catNameParagraph = document.createElement("p");
        catNameParagraph.innerText = cat.getName();
        catDiv.appendChild(catNameParagraph);

        let catImg = document.createElement("img");
        catImg.id = cat.getName() + 'Img';
        catImg.setAttribute('src', cat.getImageRoute());
        catImg.addEventListener('click', () => {
            cat.incrementClicksCounter();
            document.getElementById(cat.getName() + 'ClickCounter').innerText = 'Clicks Counter: ' + cat.getClickCounter();
        }, false);
        catDiv.appendChild(catImg);

        let catClickCounter = document.createElement("p");
        catClickCounter.id = cat.getName() + 'ClickCounter';
        catClickCounter.innerText = 'Clicks Counter: ' + cat.getClickCounter();
        catDiv.appendChild(catClickCounter);
    }
};