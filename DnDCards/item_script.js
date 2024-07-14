import items from './data/items.mjs'; 

function createItemDetails(item) {
    const container = document.getElementById('item-article-gallery');
    if (!container) {
        console.error("Container element not found.");
        return;
    }

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-details');

    const nameField = document.createElement('div');
    nameField.classList.add('item-field');
    nameField.classList.add('item-name');
    nameField.innerHTML = `<h3>${item.name}</h3>`;
    itemDiv.appendChild(nameField);

    const rarityField = document.createElement('div');
    rarityField.classList.add('item-field');
    rarityField.classList.add('item-rarity');
    rarityField.innerHTML = `<h4>Rarity:</h4><p>${item.rarity}</p>`;
    itemDiv.appendChild(rarityField);

    const attunementField = document.createElement('div');
    attunementField.classList.add('item-field');
    attunementField.classList.add('item-attunement');
    attunementField.innerHTML = `<h4>Attunement:</h4><p>${item.attunement}</p>`;
    itemDiv.appendChild(attunementField);

    const typeField = document.createElement('div');
    typeField.classList.add('item-field');
    typeField.classList.add('item-type');
    typeField.innerHTML = `<h4>Type:</h4><p>${item.type}</p>`;
    itemDiv.appendChild(typeField);

    const descriptionField = document.createElement('div');
    descriptionField.classList.add('item-field');
    descriptionField.classList.add('item-description');
    descriptionField.innerHTML = `<h4>Description:</h4><p>${item.description}</p>`;
    itemDiv.appendChild(descriptionField);

    container.appendChild(itemDiv);
}

function filterItems() {
    const searchInput = document.querySelector('.search-bar');
    const attunementCheckbox = document.querySelector('input[name="filter"][value="attunement"]');
    const searchText = searchInput.value.toLowerCase();
    const attunementChecked = attunementCheckbox.checked;

    const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText);

        const passesAttunementFilter = !attunementChecked || item.attunement.toLowerCase() === 'required';

        return matchesSearch && passesAttunementFilter;
    });

    const container = document.getElementById('item-article-gallery');
    container.innerHTML = '';

    filteredItems.forEach(item => {
        createItemDetails(item);
    });
}

// Initialization function
function init() {
    filterItems(); 

    const searchInput = document.querySelector('.search-bar');
    const attunementCheckbox = document.querySelector('input[name="filter"][value="attunement"]');
    
    searchInput.addEventListener('input', filterItems);
    attunementCheckbox.addEventListener('change', filterItems);
}

document.addEventListener('DOMContentLoaded', init);
