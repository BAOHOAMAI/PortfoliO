
// Textarea Contact Form
const textarea = document.querySelector('textarea');

textarea.addEventListener('keyup',e => {
    textarea.style.height = '76px';
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
}) 


