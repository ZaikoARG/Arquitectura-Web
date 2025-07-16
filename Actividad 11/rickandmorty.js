const fetchAllButton = document.getElementById('fetch-all');
const filterSubmitButton = document.getElementById('filter-submit');
const characterGrid = document.getElementById('character-grid');
const errorMessage = document.getElementById('error-message');

function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    characterGrid.innerHTML = '';
}

function clearError() {
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
}

function renderCharacters(characters) {
    characterGrid.innerHTML = '';
    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Estado: ${character.status}</p>
            <p>Especie: ${character.species}</p>
            <p>Tipo: ${character.type || 'N/A'}</p>
            <p>Género: ${character.gender}</p>
        `;
        characterGrid.appendChild(card);
    });
}

async function fetchAllCharacters() {
    clearError();
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        renderCharacters(data.results);
    } catch (error) {
        displayError(`No se pudieron obtener los personajes: ${error.message}`);
    }
}

async function fetchFilteredCharacters() {
    clearError();
    const filters = {
        name: document.getElementById('name').value.trim(),
        status: document.getElementById('status').value,
        species: document.getElementById('species').value.trim(),
        type: document.getElementById('type').value.trim(),
        gender: document.getElementById('gender').value
    };

    const query = Object.entries(filters)
        .filter(([_, value]) => value)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

    const url = `https://rickandmortyapi.com/api/character${query ? '?' + query : ''}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.results.length === 0) {
            displayError('No se encontraron personajes con los filtros aplicados.');
        } else {
            renderCharacters(data.results);
        }
    } catch (error) {
        displayError(`No se pudieron obtener los personajes: ${error.message}`);
    }
}

fetchAllButton.addEventListener('click', fetchAllCharacters);
filterSubmitButton.addEventListener('click', fetchFilteredCharacters);