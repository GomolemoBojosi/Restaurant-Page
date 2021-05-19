import home from './Home';
import menu from './Menu';
import contact from './contact';

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header');
  header.innerHTML = `
    <a href="#"><i class="fas fa-hamburger rotate"></i> BURGER <span class="highlight">JOINT</span></b></a>
    <ul>
      <li id="home">HOME</li>
      <li id="menu">MENU</li>
      <li id="contact">CONTACT</li>
    </ul>
  `;
  return header;
}

function loadPage() {
  const content = document.querySelector('#content');
  const { body } = document;
  body.insertBefore(createHeader(), body.firstChild);
  content.appendChild(home());
  const menuBtn = document.querySelector('#menu');
  const homeBtn = document.querySelector('#home');
  const contactBtn = document.querySelector('#contact');

  menuBtn.addEventListener('click', function (e) {
    content.textContent = '';
    content.appendChild(menu());
  });

  homeBtn.addEventListener('click', function (e) {
    content.textContent = '';
    content.appendChild(home());
  });

  contactBtn.addEventListener('click', function (e) {
    content.textContent = '';
    content.appendChild(contact());
  }); 
}

export default loadPage;


