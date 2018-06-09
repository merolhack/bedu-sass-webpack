// Load Bootstrap JS
import 'bootstrap';
// Load the SASS styles
import './main.scss';


import nav from './partials/nav.html';

const root = document.createElement("div");
root.innerHTML = nav;
document.body.appendChild(root);
