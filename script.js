const selectableSlots = document.querySelectorAll(".timeslot.is-active");
const dropdowns = document.querySelectorAll(".dropdown");

selectableSlots.forEach((slot) => {
  slot.addEventListener("click", () => {
    selectableSlots.forEach((button) => button.classList.remove("is-selected"));
    slot.classList.add("is-selected");
  });
});

const closeDropdowns = (except) => {
  dropdowns.forEach((dropdown) => {
    if (dropdown === except) return;
    dropdown.classList.remove("is-open");
    dropdown.querySelector(".field-control")?.setAttribute("aria-expanded", "false");
  });
};

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector(".field-control");
  const valueNode = dropdown.querySelector(".field-value");
  const options = dropdown.querySelectorAll(".dropdown-option");

  trigger?.addEventListener("click", (event) => {
    event.preventDefault();
    const isOpen = dropdown.classList.contains("is-open");
    closeDropdowns(dropdown);
    dropdown.classList.toggle("is-open", !isOpen);
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((item) => item.classList.remove("is-selected"));
      option.classList.add("is-selected");
      valueNode.textContent = option.dataset.value || option.textContent;
      dropdown.classList.remove("is-open");
      trigger?.setAttribute("aria-expanded", "false");
    });
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".dropdown")) {
    closeDropdowns();
  }
});
