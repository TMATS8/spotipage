$(document).ready(function () {
    const songImages = [
        'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-01D7DC796B915594F5AF682133542CD9-Png/150/150/AvatarHeadshot/Webp/noFilter', // Example image 1
        'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228', // Example image 2
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
