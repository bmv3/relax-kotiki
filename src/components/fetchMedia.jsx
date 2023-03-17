const fetchMedia = async (setMedia) => {
    const listMedia = [];
    const prePage = 100;
    let allMedia = [];
    let ending = false;

    try {
        let count = 0;

        do {
            count++;
            const response = await fetch(`${process.env.REACT_APP_GET_MEDIA_URL}?_embed&per_page=${prePage}&page=${count}`);
            const json = await response.json();
            allMedia = [...allMedia, ...json];

            console.log(json.length);
            ending = json.length <= prePage;
        } while (ending)

        // setMedia(listMedia);
    } catch (error) {
        ending = true;
        console.log("Error loading media. ", error);
    }

    allMedia.forEach(item => {
        listMedia[item.post] = item.media_details.sizes.thumbnail
    });

    setMedia(listMedia);
};

export default fetchMedia;