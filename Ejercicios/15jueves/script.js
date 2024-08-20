document.getElementById('countrySelector').addEventListener('change', function() {
    const country = this.value;
    const image = document.getElementById('countryImage');

    switch (country) {
        case 'usa':
            image.src = 'https://via.placeholder.com/600x400?text=USA';
            break;
        case 'canada':
            image.src = 'https://via.placeholder.com/600x400?text=Canada';
            break;
        case 'mexico':
            image.src = 'https://via.placeholder.com/600x400?text=Mexico';
            break;
        default:
            image.src = '';
            break;
    }
});
