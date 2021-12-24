let theme = localStorage.getItem('theme');
const showOnPx = 100;
const backToTopButton = document.querySelector('.back-to-top');

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

const goToTop = () => {
    document.body.scrollIntoView();
};

backToTopButton.addEventListener('click', goToTop);

if(theme == null){
    document.getElementById('theme-style').href = `default.css`;
}else{
    document.getElementById('theme-style').href = `${theme}.css`;
}

let themeDots = document.querySelectorAll('.theme-dot');

for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        document.getElementById('theme-style').href = `${mode}.css`;
        localStorage.setItem('theme', mode);
    })
}
