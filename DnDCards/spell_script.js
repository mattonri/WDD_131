import spells from './data/spells.mjs';

// Function to replace ***text*** with <strong>text</strong>
function replaceTripleAsterisks(text) {
    return text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong>$1</strong>');
}

// Function to construct spell articles
function constructSpellArticle(spell) {
    const article = document.createElement('article');
    article.classList.add('spell-card');
    article.id = spell.name.replace(/\s+/g, '-').toLowerCase(); // Generate ID from spell name

    const spellHeader = document.createElement('div');
    spellHeader.classList.add('spell-header');
    spellHeader.innerHTML = `
        <h1>${spell.name}</h1>
        <p>${spell.level} ${spell.school}</p>
    `;
    article.appendChild(spellHeader);

    const spellDetails = document.createElement('div');
    spellDetails.classList.add('spell-details');
    const detailsItems = [
        { label: 'CASTING TIME', value: spell.casting_time },
        { label: 'RANGE', value: spell.range },
        { label: 'COMPONENTS', value: `${spell.component_verbal ? 'V' : ''}${spell.component_semantic ? ', S' : ''}${spell.component_material ? ', M' : ''}` },
        { label: 'DURATION', value: spell.duration }
    ];
    detailsItems.forEach(item => {
        const detailItem = document.createElement('div');
        detailItem.classList.add('detail-item');
        detailItem.innerHTML = `
            <h3>${item.label}</h3>
            <p>${item.value}</p>
        `;
        spellDetails.appendChild(detailItem);
    });
    article.appendChild(spellDetails);

    const spellDescription = document.createElement('div');
    spellDescription.classList.add('spell-description');
    spellDescription.innerHTML = `
        <p><strong>Material:</strong> ${spell.component_material ? spell.component_material : 'None'}</p>
        ${replaceTripleAsterisks(spell.description).split('\n').map(para => `<p>${para}</p>`).join('')}
    `;
    article.appendChild(spellDescription);


    return article;
}

function init() {
    const container = document.getElementById('spell-article-gallery');
    if (!container) {
        console.error('Container not found');
        return;
    }

    function filterSpells() {
        const searchInput = document.querySelector('.search-bar').value.toLowerCase();
        const isRitualChecked = document.querySelector('input[name="filter"][value="ritual"]').checked;

        container.innerHTML = ''; 

        spells.filter(spell => {
            return (spell.name.toLowerCase().includes(searchInput) || spell.description.toLowerCase().includes(searchInput)) &&
                (!isRitualChecked || spell.school_ritual !== '');
        }).forEach(spell => {
            const spellArticle = constructSpellArticle(spell);
            container.appendChild(spellArticle);
        });
    }

    document.querySelector('.search-bar').addEventListener('input', filterSpells);
    document.querySelector('input[name="filter"][value="ritual"]').addEventListener('change', filterSpells);

    spells.forEach(spell => {
        const spellArticle = constructSpellArticle(spell);
        container.appendChild(spellArticle);
    });
}

init();