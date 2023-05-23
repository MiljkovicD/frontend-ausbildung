const selectors = {
    radioSpell: ".radio-spell",
    buttonActive: ".button__btn--activate",
    buttonCancel: ".button__btn--cancel",
    wizardActivate: ".wizard__img-activate",
    wizardInactivate: ".wizard__img-inactive",
    rocket: ".rocket",
    radioChecked: ".radio-spell:checked"
};

const states = {
    wizardHidden: "wizard__img--hidden",
    accio: "rocket--accio",
    levioso: "rocket--levioso",
    glacius: "rocket--glacius"
};

const buttonActivate = document.querySelector(selectors.buttonActive);
const buttonCancel = document.querySelector(selectors.buttonCancel);
const wizardActivate = document.querySelector(selectors.wizardActivate);
const wizardInactivate = document.querySelector(selectors.wizardInactivate);
const rocket = document.querySelector(selectors.rocket);

buttonActivate.addEventListener("click", activateSpell);
buttonCancel.addEventListener("click", cancelSpell);

/**
 * activate the current spell
 */
function activateSpell() {
    const radioActive = document.querySelector(selectors.radioChecked);
    toggleClasses(radioActive.value);
    buttonActivate.setAttribute("disabled", "disabled");
    buttonCancel.removeAttribute("disabled");
}

/**
 * cancel current spell
 */
function cancelSpell() {
    const radioActive = document.querySelector(selectors.radioChecked);
    toggleClasses(radioActive.value);
    buttonCancel.setAttribute("disabled", "disabled");
    buttonActivate.removeAttribute("disabled");
}

/**
 * toggle classes for wizard and rocket
 * @param {*} spell 
 */
function toggleClasses(spell) {
    wizardInactivate.classList.toggle(states.wizardHidden);
    wizardActivate.classList.toggle(states.wizardHidden);
    rocket.classList.toggle(`rocket--${spell}`);
}
