
// ! - Não é esse nome de class, VERIFIQUE
const btnMobile = document.querySelector(".btn_mobile");
const navLinks = document.getElementById("nav_links");
const list = document.querySelector(".btn_list");
const close = document.querySelector(".btn_close")

btnMobile.addEventListener("click", () =>{
    navLinks.classList.toggle("show");

    list.classList.toggle("ativo");
    close.classList.toggle("ativo");


});



// TODO - Entender isto aqui, ajuda na estética da navbar
// * Aparentemente é só um efeito de sombra no menu porem não noto diferença, mas melhor usar como padrão de projeto
// TODO - Entender como funciona para alterar e deixar uma fomra mais altentica

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
})