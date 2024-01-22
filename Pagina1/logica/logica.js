document.addEventListener('DOMContentLoaded', function () {
    var boton = document.querySelectorAll('.boton');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});
