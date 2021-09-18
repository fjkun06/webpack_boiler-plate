import users, {premUsers} from './data';

import msg from './dom';
import './message.css';

var div = document.createElement('div');
div.id='message';
var txtNode = document.createTextNode(msg);
div.appendChild(txtNode);
document.body.appendChild(div);

const premUserss = premUsers(users);
console.log(users, premUserss);