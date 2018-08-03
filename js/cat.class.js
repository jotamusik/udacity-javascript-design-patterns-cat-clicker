
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