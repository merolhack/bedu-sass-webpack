// Load Bootstrap JS
import 'bootstrap';
// Load the SASS styles
import './main.scss';


import nav from './partials/nav.html';
import jumbotron from './partials/jumbotron.html';
import mainContent from './partials/main-content.html';
import footer from './partials/footer.html';


const root = document.createElement("div");
root.className = 'content-coffee';
root.innerHTML = nav + jumbotron + mainContent + footer;
document.body.appendChild(root);
