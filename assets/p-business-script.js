document.addEventListener("DOMContentLoaded", function() {
  const titles = document.querySelectorAll('.p-business__ttl');

  if (titles.length > 1) {
    createAnchorList(titles);
  }

  adjustMarginForLastElement('.p-business__bg-gray');
  headerHeight();
});

function createAnchorList(titles) {
  const pageTitle = document.querySelector('.p-business__hero');
  const ancList = document.createElement('ul');
  ancList.className = 'p-business__ancList page-width';

  titles.forEach((element, index) => {
    element.id = `anc-${index}`;
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${element.id}`;
    link.textContent = element.textContent;
    listItem.appendChild(link);
    ancList.appendChild(listItem);
  });

  pageTitle.parentNode.insertBefore(ancList, pageTitle.nextSibling);
}

function adjustMarginForLastElement() {
  const elements = document.querySelectorAll('.p-business__bg-gray');

  elements.forEach(function(el) {
    const parent = el.parentNode;
    if (parent && !parent.nextElementSibling) {
      parent.style.marginBottom = '-30px';
    }
  });
}

function headerHeight() {
  const headers = document.querySelectorAll('.shopify-section-group-header-group');
  let totalHeight = 0;

  headers.forEach(header => {
    totalHeight += header.offsetHeight;
  });

  const ancElements = document.querySelectorAll('[id^="anc-"]');

  ancElements.forEach(element => {
    element.style.setProperty('--smt', `${totalHeight}px`);
  });
}
