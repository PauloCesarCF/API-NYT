const key = "cMikgHcfFbCmzKwNzxEaXLiwCWxIk6TD"

function getApi(){
  fetch(`https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=${key}`)
    .then(response => response.json())
    .then(notices => {
      insertFMostPopular(notices);
    })
}

async function insertFMostPopular(mostPopular){
  const insertArticles = await mostPopular.results

  const loading = document.querySelector('.loading');
  const footer = document.querySelector('.footer');

  loading.classList.add('hide');
  footer.classList.remove('hide');
  
  insertArticles.map((notice) => {
    const articles = document.querySelector('article');
    
    const container = document.createElement('div');

    const informationsFromNoticeBig = document.createElement('article');
    const contentImgsFromScreenBig = document.createElement('article');

    const containerFromScreenSmall = document.createElement('article');

    const title = document.createElement('h2');
    const date = document.createElement('p');
    const img = document.createElement('img');
    const caption = document.createElement('p');
    const copyright = document.createElement('small');
    const abstrate = document.createElement('p')
    const byline = document.createElement('p');
    const link = document.createElement('a');

    container.classList.add('container');

    informationsFromNoticeBig.classList.add('informationsFromScreenBig');
    contentImgsFromScreenBig.classList.add('contentImgsFromScreenBig');

    containerFromScreenSmall.classList.add('containerFromScreenSmall');

    title.classList.add('title');
    date.classList.add('date');
    img.classList.add('img');
    caption.classList.add('caption');
    abstrate.classList.add('abstrate');
    byline.classList.add('byline');
    link.classList.add('link');
    
    title.innerText = notice.title
    date.innerHTML = notice.published_date
    caption.innerText = notice.media[0].caption
    abstrate.innerText = notice.abstract
    byline.innerText = notice.byline
    copyright.innerText = notice.media[0].copyright
    
    link.setAttribute('href', notice.url)
    link.innerText = 'Read more'
    
    img.setAttribute('src', notice.media[0]['media-metadata'][2].url);
    img.setAttribute('alt', 'Image from new york time');

    const titleFromScreenSmall = document.createElement('h2');
    const dateFromScreenSmall = document.createElement('p');
    const imgFromScreenSmall = document.createElement('img');
    const captionFromScreenSmall = document.createElement('p');
    const copyrightFromScreenSmall = document.createElement('small');
    const abstrateFromScreenSmall = document.createElement('p')
    const bylineFromScreenSmall = document.createElement('p');
    const linkFromScreenSmall = document.createElement('a');

    titleFromScreenSmall.classList.add('title');
    dateFromScreenSmall.classList.add('date');
    imgFromScreenSmall.classList.add('img');
    captionFromScreenSmall.classList.add('caption');
    abstrateFromScreenSmall.classList.add('abstrate');
    bylineFromScreenSmall.classList.add('byline');
    linkFromScreenSmall.classList.add('link');
    
    titleFromScreenSmall.innerText = notice.title
    dateFromScreenSmall.innerHTML = notice.published_date
    captionFromScreenSmall.innerText = notice.media[0].caption
    abstrateFromScreenSmall.innerText = notice.abstract
    bylineFromScreenSmall.innerText = notice.byline
    copyrightFromScreenSmall.innerText = notice.media[0].copyright
    
    linkFromScreenSmall.setAttribute('href', notice.url)
    linkFromScreenSmall.innerText = 'Read more'
    
    imgFromScreenSmall.setAttribute('src', notice.media[0]['media-metadata'][2].url);
    imgFromScreenSmall.setAttribute('alt', 'Image from new york time');

    informationsFromNoticeBig.appendChild(date);
    informationsFromNoticeBig.appendChild(title);
    informationsFromNoticeBig.appendChild(abstrate);
    informationsFromNoticeBig.appendChild(byline);
    informationsFromNoticeBig.appendChild(link);

    contentImgsFromScreenBig.appendChild(img)
    contentImgsFromScreenBig.appendChild(caption);
    contentImgsFromScreenBig.appendChild(copyright);
    
    container.appendChild(contentImgsFromScreenBig);
    container.appendChild(informationsFromNoticeBig);
    
    containerFromScreenSmall.appendChild(titleFromScreenSmall);
    containerFromScreenSmall.appendChild(dateFromScreenSmall);
    containerFromScreenSmall.appendChild(imgFromScreenSmall);
    containerFromScreenSmall.appendChild(captionFromScreenSmall);
    containerFromScreenSmall.appendChild(copyrightFromScreenSmall);
    containerFromScreenSmall.appendChild(abstrateFromScreenSmall);
    containerFromScreenSmall.appendChild(bylineFromScreenSmall);
    containerFromScreenSmall.appendChild(linkFromScreenSmall);

    articles.appendChild(containerFromScreenSmall);
    articles.appendChild(container);
  })
}

getApi();