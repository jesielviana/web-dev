Reveal.initialize({
  hash: true,
  slideNumber: true,
  dependencies: [
    { src: 'plugin/markdown/marked.js' },
    { src: 'plugin/markdown/markdown.js' },
    { src: 'plugin/highlight/highlight.js' },
    { src: 'plugin/search/search.js', async: true },
    { src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/notes/notes.js', async: true }
  ]
});
Reveal.configure({ slideNumber: 'c/t' });

function loadPrintsLinks () {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = window.location.search.match(/print-pdf/gi) ? 'css/print/pdf.css' : 'css/print/paper.css';
  document.getElementsByTagName('head')[0].appendChild(link);
}

let theme = 'light';
function changeTheme () {
  if (theme === 'light') {
    document.getElementById('theme').setAttribute('href', 'css/theme/black.css');
    document.getElementById('code-theme').setAttribute('href', 'lib/css/atom-one-dark.css');
    theme = 'dark'
  } else {
    document.getElementById('theme').setAttribute('href', 'css/theme/white.css');
    document.getElementById('code-theme').setAttribute('href', 'lib/css/atom-one-light.css');
    theme = 'light';
  }
}


function printPDF () {
  const path = window.location.origin + window.location.pathname
  window.location = `${path}?print-pdf`
}

 function disablePrintOnMobile(){
   if(/Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
    const btnPrint = document.querySelector('.btn-print')
    btnPrint.style.display = 'none'
   }
 }


function init(){
  disablePrintOnMobile()
  loadPrintsLinks()
  window.onload = () => {
    if (window.location.search.match(/print-pdf/gi)) {
      window.print();
    }
    window.onafterprint = () => {
      const path = window.location.origin + window.location.pathname
      window.location = path
    }
  }
}

init()