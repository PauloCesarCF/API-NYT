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
    
    const container = document.createElement('div');
    const informations = document.createElement('article');
    const imgs = document.createElement('article');
    const title = document.createElement('h2');
    const date = document.createElement('p');
    const img = document.createElement('img');
    const caption = document.createElement('p');
    const copyright = document.createElement('small');
    const abstrate = document.createElement('p')
    const byline = document.createElement('p');
    const link = document.createElement('a');

    container.classList.add('container');
    informations.classList.add('r');
    title.classList.add('title');
    date.classList.add('date');
    img.classList.add('img');
    imgs.classList.add('imgs');
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
    
    img.setAttribute('src', films.media[0]['media-metadata'][2].url);
    img.setAttribute('alt', 'Image from new york time');

    informations.appendChild(date);
    informations.appendChild(title);
    informations.appendChild(abstrate);
    informations.appendChild(byline);
    informations.appendChild(link);

    imgs.appendChild(img)
    imgs.appendChild(caption);
    imgs.appendChild(copyright);

    container.appendChild(imgs);
    container.appendChild(informations);

    articles.appendChild(container);
  })
}

getApi();