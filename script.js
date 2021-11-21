let theme = localStorage.getItem('theme');

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
