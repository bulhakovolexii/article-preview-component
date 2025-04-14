"use strict";
const togglePopup = (btnSelector, popupSelector) => {
    const btn = document.querySelector(btnSelector);
    const popup = document.querySelector(popupSelector);
    if (!btn) {
        throw new Error(`${btnSelector} is not exist`);
    }
    if (!popup) {
        throw new Error(`${popupSelector} is not exist`);
    }
    const isOpen = (el) => {
        return el.getAttribute("data-open") === "true";
    };
    btn.addEventListener("click", () => {
        if (!isOpen(btn) && !isOpen(popup)) {
            btn.setAttribute("data-open", "true");
            popup.setAttribute("data-open", "true");
        }
        else {
            btn.setAttribute("data-open", "false");
            popup.setAttribute("data-open", "false");
        }
    });
};
togglePopup("#share-btn", "#share-popup", "active");
