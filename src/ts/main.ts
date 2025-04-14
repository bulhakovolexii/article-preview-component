const togglePopup = (btnSelector: string, popupSelector: string): void => {
  const btn = document.querySelector(btnSelector);
  const popup = document.querySelector(popupSelector);

  if (!btn) {
    throw new Error(`${btnSelector} is not exist`);
  }

  if (!popup) {
    throw new Error(`${popupSelector} is not exist`);
  }

  const isOpen = (el: Element): boolean => {
    return el.getAttribute("data-open") === "true";
  };

  btn.addEventListener("click", (): void => {
    if (!isOpen(btn) && !isOpen(popup)) {
      btn.setAttribute("data-open", "true");
      popup.setAttribute("data-open", "true");
    } else {
      btn.setAttribute("data-open", "false");
      popup.setAttribute("data-open", "false");
    }
  });
};

togglePopup("#share-btn", "#share-popup", "active");
