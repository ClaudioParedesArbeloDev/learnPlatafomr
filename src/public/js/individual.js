const openModalfrente = document.querySelector('.frenteDNI');
const openModaldorso = document.querySelector('.dorsoDNI');
const modalFrente = document.querySelector('.modalDNIfrente');
const modalDorso = document.querySelector('.modalDNIdorso');
const closeModalFrente = document.querySelector('.modal__closeFrente');
const closeModalDorso = document.querySelector('.modal__closeDorso');

openModalfrente.addEventListener('click', (e)=>{
    e.preventDefault();
    modalFrente.classList.add('modalDNIfrente--show');
});

openModaldorso.addEventListener('click', (e)=>{
    e.preventDefault();
    modalDorso.classList.add('modalDNIdorso--show');
});

closeModalFrente.addEventListener('click', (e)=>{
    e.preventDefault();
    modalFrente.classList.remove('modalDNIfrente--show');
});

closeModalDorso.addEventListener('click', (e)=>{
    e.preventDefault();
    modalDorso.classList.remove('modalDNIdorso--show');
});