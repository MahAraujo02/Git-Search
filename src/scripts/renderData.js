const renderData = () => {
   const data = JSON.parse(localStorage.getItem('repos'));
   const ul = document.querySelector('ul');

    data.forEach(repo => {
         const li = document.createElement('li');
         li.textContent = repo.name;
         ul.appendChild(li);
    });
}	
renderData()