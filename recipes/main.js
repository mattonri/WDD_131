import recipes from './recipes.mjs';


function randomInt(num){
    return Math.floor(Math.random()*(num));
}

function getRandomListEntry(list) {
    const randomListIndex = randomInt(list.length);
    return list[randomListIndex];
}


function tagsTemplate(tags) {
    let html = '';
    for (let i = 0; i < tags.length; i++) {
        html += `<li>${tags[i]}</li>`;
    }
    return html;
}

function ratingTemplate(rating) {
        let html = `<span
            class="rating"
            role="img"
            aria-label="Rating: ${rating} out of 5 stars"
        >`;
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
            } else {
                html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
            }
        }
        html += `</span>`;
        return html;
}

function recipeTemplate(recipe) {
	return `<article>
<img src="${recipe.image}" alt="picture of ${recipe.name}">
${tagsTemplate(recipe.tags)}
<a href="#"><h2>${recipe.name}</h2></a>
 ${ratingTemplate(recipe.rating)}
<p class="description">
${recipe.description}
</p>
</article>`;
}

function renderRecipes(recipeList) {
    const outputElement = document.getElementById("maincontent");
    let html = '';
    for (let i = 0; i < recipeList.length; i++) {
        html += recipeTemplate(recipeList[i]);
    }
    outputElement.innerHTML = html;
}

function init() {
    // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();



function filterRecipes(query) {
	const filtered = recipes.filter(recipe => {
        const { name, description, tags, ingredients } = recipe;
        const lowerQuery = query.toLowerCase();
        return (
            name.toLowerCase().includes(lowerQuery) ||
            description.toLowerCase().includes(lowerQuery) ||
            // use && to handle empty tag/ingredients lists
            (tags && tags.some(tag => tag.toLowerCase().includes(lowerQuery))) ||
            (ingredients && ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerQuery)))
        );
    });
	const sorted = filtered.sort((a,b) => a.name.localeCompare(b.name));
		return sorted;
}

function searchHandler(e) {
	e.preventDefault()
    const searchInput = document.getElementById("search-input");
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}
document.getElementById("search-button").addEventListener("click", searchHandler);
