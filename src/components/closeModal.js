export const closModal = () => {
  const modalDay = document.getElementById("modalDay");
  modalDay.addEventListener("click", (e) => {
    if (e.target.id === "modalDay") {
      modalDay.classList.toggle("hidden");
    }
  });
};
