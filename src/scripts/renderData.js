const renderData = () => {

   const data = JSON.parse(localStorage.getItem('repos'));
   const ul = document.querySelector('ul');

    data.forEach(repo => {
         const li = document.createElement('li');
         li.classList.add('repo');

         const div = document.createElement('div');
         div.classList.add('repo__info');
         
         const h2 = document.createElement("h2");
         h2.classList.add('repo__name');
     
         const description = document.createElement('p');
         description.classList.add('repo__description');

         const link = document.createElement('a');
         link.classList.add('repo__link');
        
         if(repo.description === null) {
             repo.description = "Sem descrição";
          }

         h2.textContent = repo.name;
         description.textContent = repo.description;
         link.href = repo.html_url;
         link.textContent = 'Repositório';
      
         div.appendChild(h2);
         div.appendChild(description);
         div.appendChild(link);
         li.appendChild(div);
         ul.appendChild(li);
    });
}

function renderProfileAndName() {
     const profile = JSON.parse(localStorage.getItem('avatar'));
     const name = JSON.parse(localStorage.getItem('name'));


     const img = document.querySelector('.img__profile');
     img.src = profile;

     const h1 = document.querySelector('.name');
     h1.textContent = name;
     
}

renderProfileAndName()
renderData()