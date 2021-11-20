let themeDots = document.querySelectorAll('.theme-dot');

for (var i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        document.getElementById('theme-style').href = `${mode}.css`;
    })
}
