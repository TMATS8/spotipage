$(document).ready(function () {
    const songImages = [
        'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228', // Example image 1
        'https://i.scdn.co/image/ab67616d0000b273f8ebde9d9d7b29093f3b76d1', // Example image 2
        'https://i.scdn.co/image/ab67616d0000b273c67bbfd9cb198520f456f04d', // Example image 3
        'https://i.scdn.co/image/ab67616d0000b2738133cb00ae0c3de2381104e0', // Example image 4
        'https://i.scdn.co/image/ab67616d0000b273c6a219c0de3d1c0f7cd378fc'  // Example image 5
    ];

    // Populate the songs container with image elements
    const songsContainer = $('#songs-container');
    songImages.forEach((imageUrl) => {
        const songItem = `<div class="song-item">
            <img src="${imageUrl}" alt="Song Image" />
        </div>`;
        songsContainer.append(songItem);
    });
});
