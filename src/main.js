// Load Bootstrap JS
import 'bootstrap';
// Load the SASS styles
import './main.scss';
// Load the HTML
import nav from './partials/nav.html';
import mainContent from './partials/main-content.html';
import menuContent from './partials/menu-content.html';
import ordersContent from './partials/orders-content.html';
import myAccount from './partials/my-account.html';
import footer from './partials/footer.html';
// Create and append the HTML to body
const root = document.createElement("div");
const dummy = document.createElement("div");
dummy.className = 'content';

 root.className = 'content-site';
 


// Show the content methods
window.showIndex = function() {
    dummy.innerHTML = nav + mainContent + footer;
    root.appendChild(dummy);
    document.body.appendChild(root);
};
window.showMenu = function() {
    dummy.innerHTML = nav + menuContent + footer;
    root.appendChild(dummy);
    document.body.appendChild(root);
};
window.showOrders = function() {
    dummy.innerHTML = nav + ordersContent + footer;
    root.appendChild(dummy);
    document.body.appendChild(root);
};
window.showMyAccount = function() {
    dummy.innerHTML = nav + myAccount + footer;
    root.appendChild(dummy);
    document.body.appendChild(root);
};
// Show index content
window.showIndex();

// const menuItem = document.getElementById('menu-item');
// menuItem.addEventListener