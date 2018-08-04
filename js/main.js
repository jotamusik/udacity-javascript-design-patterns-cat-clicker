

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

function fillSideBar(cats) {

    let catIndex = 0;

    for ( let cat of cats ) {

        let sidebar = document.getElementById('sidebar');
        let listItem = document.createElement('div');
        listItem.setAttribute('id', catIndex.toString());
        listItem.setAttribute('class', 'listItem');
        listItem.innerText = cat.getName();
        sidebar.appendChild(listItem);
        listItem.addEventListener('click', changeSelectedCatOnClick);

        catIndex++;
    }

}

function changeSelectedCatOnClick(event) {
    let id = event.target.getAttribute('id');
    selectedCat = cats[id];
    changeSelectedCatContentInfo();
}

function updateContentInfoCatName() {
    document.getElementById('catName').innerText = selectedCat.getName();
}

function updateContentInfoImgRoute() {
    document.getElementById('catImg').setAttribute('src', selectedCat.getImageRoute());
}

function updateContentInfoClickCounterParagraph() {
    document.getElementById('catCounterParagraph').innerText = 'Clicks Counter: ' + selectedCat.getClickCounter();
}

function changeSelectedCatContentInfo() {
    updateContentInfoCatName();
    updateContentInfoImgRoute();
    updateContentInfoClickCounterParagraph();
}

function incrementSelectedCatClicksCounter(event) {
    selectedCat.incrementClicksCounter();
    updateContentInfoClickCounterParagraph();
}



let selectedCat = new Cat();
let cats = initializeCats();

function run() {

    fillSideBar(cats);
    document.getElementById('catImg').addEventListener('click', incrementSelectedCatClicksCounter);
}


document.body.onload = run;