function openCloneNav() {
 
  const nav = document.querySelector('.nav');
  if(nav.style.display == 'flex') {
    console.log('set none')
    nav.style.display = 'none'
  }else{
    console.log('set block')
    nav.style.display = 'flex'
  }

  console.log('nav', nav.style)
}
