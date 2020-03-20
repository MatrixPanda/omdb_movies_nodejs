window.onload = function() {
    button = document.getElementById('show-info');
    button.onclick = function() {
        fetch('http://localhost:3001/showtimes')
            .then((response) => response.json())
            .then((showtimes) => {
            for (let showtime of showtimes) {
                console.log(showtime.title);
                // document.getElementById('show-list')
                //     .setAttribute('value', customer.firstName);
                // document.getElementById('show-list')
                //     .setAttribute('value', customer.lastName);
            }
            });
    };
}