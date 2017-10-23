/**
 * @Author: Jecyu
 * @Date: 2017-10-23 10:46:27 am 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-10-23 12:11:24 pm 
 */
const greeter = function() {
    var greet         = document.createElement('div');
    greet.textContent = 'Hi, Jecyu!?'
    return greet;
};

module.exports = greeter;