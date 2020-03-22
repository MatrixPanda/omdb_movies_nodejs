window.onload = function() {

    fetch('http://localhost:3001/showtimes')
            .then((response) => response.json())
            .then((showtimes) => {
                var tbl = document.createElement("table");

                for (let showtime of showtimes) {
                    var trow = document.createElement("tr");
                    for (x=0; x < 2; x++) {
                        if (x == 0) {
                            let link = document.createElement('a');
                            var cellText = document.createTextNode(showtime.title);
                            // link.setAttribute('href', 'https://www.google.ca/');
                            // let link = document.createElement('a');
                            // link.setAttribute('value', showtime.title)  // note: using 'value' doesn't work
                            link.appendChild(cellText);

                            link.onclick = function() {
                                getDetails(showtime.id);
                                // window.scrollTo(0, document.body.scrollHeight);  // Auto scroll to the bottom
                                // console.log(document.body.scrollHeight);
                            };

                            var tcell = document.createElement("td");
                            tcell.appendChild(link);
                            trow.appendChild(tcell);
                        } else {
                            // let newDivItem = document.createElement('div');
                            var newDivItem;
                            var tcell = document.createElement("td");

                            for (i in showtime.times) {
                                newDivItem = document.createElement('div');
                                newDivItem.setAttribute('class', 'times');
                                var cellText = document.createTextNode(showtime.times[i]);
                                newDivItem.appendChild(cellText);
                                tcell.appendChild(newDivItem);
                            }
                            trow.appendChild(tcell);
                        }
                    }
                    tbl.appendChild(trow); 
                }

                let insertToDiv = document.getElementById('show-info');
                insertToDiv.appendChild(tbl);
            });

}


var apiKeys = {
    omdb: 'fab1cfc1',
};


// A function that gets the advanced details of a movie provided at https://www.omdbapi.com
// Follows the format http://www.omdbapi.com/?i=${id}&apikey=${apiKey}
function getDetails(id) {
    let detailsSection = document.getElementById('show-detailed-info');
    detailsSection.style.display = 'flex';
    detailsSection.innerHTML = "";  // note: This will clear this div each time before appending to it

    fetch('http://www.omdbapi.com/?i=' + id + '&apikey=' + apiKeys.omdb)
            .then((response) => response.json())
            .then((details) => {
                this.console.log(details.Title);
                var tbl = document.createElement("table");
                var trow = document.createElement("tr");

                // Show poster
                var tcellPoster = document.createElement("td");
                var p = document.createElement("IMG");
                p.setAttribute("src", details.Poster);
                // p.setAttribute("width", "304");
                // p.setAttribute("height", "228");
                // p.setAttribute("alt", "");
                tcellPoster.appendChild(p);
                trow.appendChild(tcellPoster);


                // Show descriptions
                var tcellDescription = document.createElement("td");

                newDivItem = document.createElement('div');
                newDivItem.setAttribute('class', 'movie-description');
                var cellText = document.createTextNode('Title: ' + details.Title);
                newDivItem.appendChild(cellText);
                tcellDescription.appendChild(newDivItem);

                newDivItem = document.createElement('div');
                newDivItem.setAttribute('class', 'movie-description');
                var cellText = document.createTextNode('Year: ' + details.Year);
                newDivItem.appendChild(cellText);
                tcellDescription.appendChild(newDivItem);

                newDivItem = document.createElement('div');
                newDivItem.setAttribute('class', 'movie-description');
                var cellText = document.createTextNode('Genre: ' + details.Genre);
                newDivItem.appendChild(cellText);
                tcellDescription.appendChild(newDivItem);

                newDivItem = document.createElement('div');
                newDivItem.setAttribute('class', 'movie-description');
                var cellText = document.createTextNode('Runtime: ' + details.Runtime);
                newDivItem.appendChild(cellText);
                tcellDescription.appendChild(newDivItem);

                newDivItem = document.createElement('div');
                newDivItem.setAttribute('class', 'movie-description');
                var cellText = document.createTextNode('Director: ' + details.Director);
                newDivItem.appendChild(cellText);
                tcellDescription.appendChild(newDivItem);

                newDivItem = document.createElement('div');
                newDivItem.setAttribute('class', 'movie-description');
                var cellText = document.createTextNode('Writer: ' + details.Writer);
                newDivItem.appendChild(cellText);
                tcellDescription.appendChild(newDivItem);

                newDivItem = document.createElement('div');
                newDivItem.setAttribute('class', 'movie-description');
                var cellText = document.createTextNode('Actors: ' + details.Actors);
                newDivItem.appendChild(cellText);
                tcellDescription.appendChild(newDivItem);

                newDivItem = document.createElement('div');
                newDivItem.setAttribute('class', 'movie-description');
                var cellText = document.createTextNode('Plot: ' + details.Plot);
                newDivItem.appendChild(cellText);
                tcellDescription.appendChild(newDivItem);

                newDivItem = document.createElement('div');
                newDivItem.setAttribute('class', 'movie-description');
                var cellText = document.createTextNode('Rating: ');
                newDivItem.appendChild(cellText);

                for (i=0; i < Math.floor(details.imdbRating); i++) {
                    var r = document.createElement("IMG");
                    r.setAttribute("src", "images/award.png");
                    r.setAttribute("style", "margin: 0.0rem 0.5rem 0.0rem 0rem;");
                    newDivItem.appendChild(r);
                }
                tcellDescription.appendChild(newDivItem);
                
                trow.appendChild(tcellDescription);
                
                tbl.appendChild(trow);
                detailsSection.appendChild(tbl);
            });
}
