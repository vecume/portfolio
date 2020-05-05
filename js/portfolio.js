function portfolio() {
  const elsSortButton = document.querySelectorAll('.sort-btn');
  const elResultsBox = document.querySelector('.sort-results');
  const elResultTemplate = document.querySelector('#sortedPostTemplate').content;


  showResults(projects);
  elsSortButton.forEach(btn => {

    btn.addEventListener('click', (evt) => {
      elsSortButton.forEach(b => {
        b.classList.remove('btn--active');
      });
      evt.target.classList.add('btn--active')
      if (evt.target.dataset.sort === "*") {
        showResults(projects);
      } else {
        const results = projects.filter(p => p.type === evt.target.dataset.sort);
        showResults(results);
      }
    });
  });

  function showResults(results) {
    elResultsBox.innerHTML = '';
    const projectsFragment = document.createDocumentFragment();

    results.forEach(r => {
      const projectsClone = document.importNode(elResultTemplate, true);
      projectsClone.querySelector('.project-link').href = r.link;
      projectsClone.querySelector('.project-link').target = '_blank';
      projectsClone.querySelector('.project-img').src = `img/${r.img}`;
      projectsClone.querySelector('.project-img').alt = r.name;
      projectsClone.querySelector('.project-title').textContent = r.name;
      projectsClone.querySelector('.project-type').textContent = r.type.toUpperCase();
      projectsFragment.appendChild(projectsClone);
    });
    elResultsBox.appendChild(projectsFragment);
    animateResults(elResultsBox)
  }

  function animateResults(results) {
    const elsProject = results.children;
    for (let i = 0; i < elsProject.length; i++) {
      setTimeout(() => {
        try {
          elsProject[i].classList.add('animateProject');
        } catch (err) {
          console.log(err);
        }
      }, (i + 1) * 100)
    }
  }
}