import { articles } from './articles_data.js';

function insertArticles(articles)
{
    const articleContainer = document.getElementById('article-gallery')
    articles.forEach(article => {
        articleContainer.insertAdjacentHTML('beforeend', constructArticle(article))
    });
}

function constructArticle(article)
{
    return  `<article>
    <h2>${article.title}</h2>
    <div class="book-info">
        <p>${article.date}</p>
        <p>${article.ages}</p>
        <p>${article.genre}</p>
        <p>${article.stars}</p>
        <p class="book-summary">${article.description}<a href="#">Read More...</a></p>
    </div>
    <img src="${article.imgSrc}" alt="${article.imgAlt}">
    <div class="book-reviews">
        <p><strong>User:</strong>${article.reviews.user} - ${article.reviews.stars}<strong>Date:</strong>${article.reviews.date}<br>
        <em>${article.reviews.comment}</em></p>
    </div>
</article>`;
}

function insertArticlesOnPageLoad() {
    window.addEventListener('load', () => {
        insertArticles(articles);
    });
}
insertArticlesOnPageLoad()