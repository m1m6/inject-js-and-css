console.log('Js-HowTo.Com');

const secondContent = document.createElement('div');
secondContent.style.width = 'fit-content';
secondContent.style.background = 'blue';
secondContent.style.color = 'white';
secondContent.style.padding = '4px';
secondContent.style.marginTop = '10px';
secondContent.innerHTML = 'Content from script 2';

document.getElementById('script2-content').appendChild(secondContent);
