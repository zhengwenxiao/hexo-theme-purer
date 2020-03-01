[...document.querySelectorAll('article img')]
  .filter((n) => n.style.display !== 'none' && !n.parentElement.classList.contains('panel-body'))
  .forEach((img) => {
    const imageCaption = img.getAttribute('alt');
    let imageWrapLink = img.parentNode;
    while (imageWrapLink !== document.body
        || (imageWrapLink.tagName === 'A' && imageWrapLink.href.length > 0)) {
      imageWrapLink = imageWrapLink.parentElement;
    }
    if (imageWrapLink === document.body) {
      let src = img.getAttribute('src');
      const idx = src.lastIndexOf('?');
      if (idx !== -1) {
        src = src.substring(0, idx);
      }
      const wraper = document.createElement('div');
      wraper.classList.add('image');
      wraper.setAttribute('data-src', src);
      img.parentNode.insertBefore(wraper, img);
      wraper.appendChild(img);
      imageWrapLink = wraper;
      wraper.setAttribute('data-caption', imageCaption);
    }
  });
lightGallery(document.querySelector('.content'), {
  selector: '.image',
  zoom: true,
  fullScreen: true,
});
