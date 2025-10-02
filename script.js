const container = document.querySelector('.cantainer')





fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((json) => {
    json.forEach((json) => {
      const div = document.createElement('div')
      div.setAttribute('class', 'card')
      div.classList.add('mt-2', 'border', 'text-xl', 'border-[#333]', 'border-2', 'w-[500px]', 'mx-auto', 'p-6')
      div.innerHTML = `id:${json.id}<br> Title:${json.title}`
      container.appendChild(div)
  console.log(json);
    })


  });





