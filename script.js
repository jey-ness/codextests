const selectableSlots = document.querySelectorAll(".timeslot.is-active");

selectableSlots.forEach((slot) => {
  slot.addEventListener("click", () => {
    selectableSlots.forEach((button) => button.classList.remove("is-selected"));
    slot.classList.add("is-selected");
  });
});
