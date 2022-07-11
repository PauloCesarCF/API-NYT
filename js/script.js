const key = "cMikgHcfFbCmzKwNzxEaXLiwCWxIk6TD"

function getApi(){
  fetch(`https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${key}`)
    .then(response => response.json())
    .then(film => {
      insertFMostPopular(film);
    })
}

async function insertFMostPopular(teste){
  const insertArticles = await teste.results

  const loading = document.querySelector('.loading');
  const footer = document.querySelector('.footer');

  loading.classList.add('hide');
  footer.classList.remove('hide');
  
  insertArticles.map((films) => {
    const articles = document.querySelector('article');
    
    const article = document.createElement('article');
    const title = document.createElement('h2');
    const date = document.createElement('p');
    const caption = document.createElement('p');
    const copyright = document.createElement('small');
    const abstrate = document.createElement('h3')
    const byline = document.createElement('p');
    const link = document.createElement('a');

    article.classList.add('r'); 
    title.classList.add('title');
    date.classList.add('date');
    caption.classList.add('caption');
    abstrate.classList.add('abstrate');
    byline.classList.add('byline');
    link.classList.add('link');
    
    title.innerText = films.title
    date.innerHTML = films.published_date
    caption.innerText = films.media[0].caption
    abstrate.innerText = films.abstract
    byline.innerText = films.byline
    copyright.innerText = films.media[0].copyright
    
    link.setAttribute('href', films.url)
    link.innerText = 'Read more'
    
    const img = document.createElement('img') 
    img.setAttribute('src', films.media[0]['media-metadata'][2].url)
    img.setAttribute('alt', 'Image from new york time')

    article.appendChild(title);
    article.appendChild(date);
    article.appendChild(img);
    article.appendChild(caption);
    article.appendChild(copyright);
    article.appendChild(abstrate);
    article.appendChild(byline);
    article.appendChild(link);

    articles.appendChild(article);
  })
}

getApi();