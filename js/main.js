

function Cat() {
    let name,
        imageRoute,
        clicks = 0;

    return {
        getName: () => {
            return name;
        },
        setName: (newName) => {
            name = newName;
        },
        getClickCounter: () => {
            return clicks;
        },
        incrementClicksCounter: () => {
            clicks++;
        },
        getImageRoute: () => {
            return imageRoute;
        },
        setImageRoute: (newImageRoute) => {
            imageRoute = newImageRoute;
        }
    }
}

function initializeCats() {
    let cats = [];

    let cat = new Cat();
    cat.setName('Cookie');
    cat.setImageRoute('assets/cat1.jpg');

    cats.push(cat);

    cat = new Cat();
    cat.setName('Blue');
    cat.setImageRoute('assets/cat2.jpg');

    cats.push(cat);

    cat = new Cat();
    cat.setName('Lula and Mike');
    cat.setImageRoute('assets/cat3.jpg');

    cats.push(cat);
    return cats;
}

// Show the cats all together
function secondApproach() {

    let cats = initializeCats();

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
        });
        catDiv.appendChild(catImg);

        let catClickCounter = document.createElement("p");
        catClickCounter.id = cat.getName() + 'ClickCounter';
        catClickCounter.innerText = 'Clicks Counter: ' + cat.getClickCounter();
        catDiv.appendChild(catClickCounter);
    }
}

function multipleCatsWithSideSelector() {

    let cats = initializeCats();

    for ( let cat of cats ) {
        let sidebar = document.getElementById('sidebar');
        let listItem = document.createElement('div');
        listItem.setAttribute('class', 'listItem');
        listItem.innerText = cat.getName();
        sidebar.appendChild(listItem);
        sidebar.addEventListener('click', ((catCopy) => {

            return () => {

                let catNameParagraph = document.getElementById('catName');
                catNameParagraph.innerText = catCopy.getName();

                let catImg = document.getElementById('catImg');
                catImg.setAttribute('src', catCopy.getImageRoute());
                catImg.addEventListener('click', ((catNestedCopy) => {
                    return () => {
                        catNestedCopy.incrementClicksCounter();
                        document.getElementById('catCounterParagraph').innerText = 'Clicks Counter: ' + catNestedCopy.getClickCounter();
                    }
                })(catCopy), false);

                let catClickCounter = document.getElementById('catCounterParagraph');
                catClickCounter.innerText = 'Clicks Counter: ' + cat.getClickCounter();
            }

        })(cat), false);
    }

}


document.body.onload = multipleCatsWithSideSelector;