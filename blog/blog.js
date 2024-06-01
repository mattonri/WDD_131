import { articles } from './articles_data.js';
const reviews = articles.reviews;
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
    <div class="book-reviews">` + constructReviews(article)+ `</div>
</article>`;
}

function constructReviews(article) {
    let reviewsString = ``;
    if (article.reviews && article.reviews.length > 0) {
        article.reviews.forEach(review => {
            reviewsString += constructReview(review);
        });
    }
    return reviewsString;
}

function constructReview(review) {
    return `<p><strong>User:</strong>${review.user} - ${review.stars}<strong>Date:</strong>${review.date}<br><em>${review.comment}</em></p>`;
}
function insertArticlesOnPageLoad() {
    window.addEventListener('load', () => {
        insertArticles(articles);
    });
}
insertArticlesOnPageLoad()