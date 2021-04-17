const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    preload: 'metadata',
    audio: [{
        name: '光るなら',
        artist: 'Goose house',
        url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
        cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
        theme: '#ebd0c2'
    }]
});