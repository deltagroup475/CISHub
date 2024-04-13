document.addEventListener("DOMContentLoaded", function() {
  // use AJAX to get faculty table
  fetch('facultyTable.php')
      .then(response => response.json())
      .then(data => {
          const facultyGrid = document.getElementById('faculty-grid');
        // Loop through each teacher and create a card
                    data.forEach(faculty => {
                        const card = document.createElement('div');
                        card.classList.add('faculty-card');

                        // Add teacher's name
                        const name = document.createElement('h2');
                        name.textContent = faculty.name;
                        card.appendChild(name);

                        // Add teacher's picture
                        const picture = document.createElement('img');
                        picture.src = faculty.picture_url;
                        picture.alt = faculty.name;
                        card.appendChild(picture);

                        // Append card to the grid
                        facultyGrid.appendChild(card);
                    });
                })
                .catch(error => console.error('Error fetching teacher data:', error));
        });