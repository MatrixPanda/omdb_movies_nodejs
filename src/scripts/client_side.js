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
                                let details = document.getElementById('show-detailed-info');
                                details.style.display = 'flex';
                                console.log(showtime.id);
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