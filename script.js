console.log('Js-HowTo.Com');

const firstContent = document.createElement('div');
firstContent.style.width = 'fit-content';
firstContent.style.background = 'green';
firstContent.style.color = 'white';
firstContent.style.padding = '4px';
firstContent.innerHTML = 'Content from script 1';

document.getElementById('script1-content').appendChild(firstContent);
