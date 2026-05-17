const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const skillsGrid = $('#skillsGrid');
skillsGrid.innerHTML = SKILLS.map(group => `<article class="skill-box"><h3>${group.icon} ${group.title}</h3><div class="chips">${group.items.map(i=>`<span>${i}</span>`).join('')}</div></article>`).join('');

let activeCategory = 'Reporting';
let offset = 0;
const tabs = $('#portfolioTabs');
tabs.innerHTML = Object.keys(PROJECTS).map(k => `<button data-tab="${k}">${k}</button>`).join('');

function renderProjects() {
    $$('#portfolioTabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === activeCategory));
    const list = PROJECTS[activeCategory];
    const ordered = [...list.slice(offset), ...list.slice(0, offset)];
    $('#projectCards').innerHTML = ordered.map(p => `<article class="project-card"><img src="${p.img}" alt="${p.title}"><div><h3>${p.title}</h3><p>${p.description}</p><small>Skills: ${p.skills}</small>
    <a href="${p.link}" target="_blank" class="link-btn">View here</a>
    </div></article>`).join('');
}

tabs.addEventListener('click', e => { if(e.target.matches('button')){activeCategory=e.target.dataset.tab; offset=0; renderProjects();}});
$('#nextProject').onclick = () => { offset = (offset + 1) % PROJECTS[activeCategory].length; renderProjects(); };
$('#prevProject').onclick = () => { offset = (offset - 1 + PROJECTS[activeCategory].length) % PROJECTS[activeCategory].length; renderProjects(); };
//renderProjects(); 

$('#blogGrid').innerHTML = BLOGS.map(b => `<article class="article-card ${b.featured ? 'featured' : ''}"><img src="${b.img}" alt="${ b.title }"><div><h3>${b.title}</h3><p>${b.descr}</p><a href="${ b.link }" target="_blank" class="link-btn">Read here</a></div></article>`).join('');
$$('.reveal').forEach(el => el.classList.add('in'));

renderProjects(); 


const sections = $$('section.panel');
const dots = $('#sectionDots');
dots.innerHTML = sections.map(s => `<a href="#${s.id}" aria-label="Go to ${s.id}"></a>`).join('');
const navLinks = $$('.main-nav a');
const dotLinks = $$('#sectionDots a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const id = entry.target.id;
      navLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      dotLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      $$('.reveal', entry.target).forEach((el,i)=>setTimeout(()=>el.classList.add('in'), i*90));
    }
  });
},{threshold:.55});
sections.forEach(s=>observer.observe(s));

$('#menuBtn').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
document.addEventListener('mousemove', e => { const g=$('.cursor-glow'); g.style.left=e.clientX+'px'; g.style.top=e.clientY+'px'; });
