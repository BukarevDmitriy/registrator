function setClassBySize(element, addClass) {
    element.classList.add(addClass);
}

function removeClassesBySize(element) {
    let classes = [
        'registrator-form__lg',
        'registrator-form__md',
        'registrator-form__sm',
        'registrator-form__xs',
    ];

    for (let i = 0; i < classes.length; i++) {
        element.classList.remove(classes[i]);
    }
}

function setAndRemoveClasses(element, addClass) {
    removeClassesBySize(element);
    setClassBySize(element, addClass);
}

window.onload = function() {
    let registratorForm = document.querySelector('.registrator-form');

    if (registratorForm.offsetWidth > 1599) {
        setClassBySize(registratorForm, 'registrator-form__lg');
    } else if (registratorForm.offsetWidth > 1024 && registratorForm.offsetWidth <= 1599 ) {
        setClassBySize(registratorForm, 'registrator-form__md');
    } else if (registratorForm.offsetWidth > 640 && registratorForm.offsetWidth <= 1024 ) {
        setClassBySize(registratorForm, 'registrator-form__sm');
    } else {
        setClassBySize(registratorForm, 'registrator-form__xs');
    }
};

window.onresize = function() {
    let registratorForm = document.querySelector('.registrator-form');

    if (registratorForm.offsetWidth > 1599) {
        setAndRemoveClasses(registratorForm, 'registrator-form__lg');
    } else if (registratorForm.offsetWidth > 1024 && registratorForm.offsetWidth <= 1599 ) {
        setAndRemoveClasses(registratorForm, 'registrator-form__md');
    } else if (registratorForm.offsetWidth > 640 && registratorForm.offsetWidth <= 1024 ) {
        setAndRemoveClasses(registratorForm, 'registrator-form__sm');
    } else {
        setAndRemoveClasses(registratorForm, 'registrator-form__xs');
    }
};