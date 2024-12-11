document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('comic.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const title = urlParams.get('title');

        const comicImageMap = {
            'Comic 1': 'comic1.jpg',
            'Comic 2': 'comic2.jpg',
            'Comic 3': 'comic3.jpg',
            'Comic 4': 'comic4.jpg',
            // Add more mappings for additional comics
        };

        const description = "This is a detailed description of " + title + ".";

        document.getElementById('comic-title').innerText = title;
        document.getElementById('comic-image').src = comicImageMap[title];
        document.getElementById('comic-description').innerText = description;
    }
});
