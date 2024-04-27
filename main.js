const rating_values = document.querySelectorAll(".rating_values span");
const submitBtn = document.getElementById("submitBtn");
const rate_point = document.getElementById("rate");
const rating_state_section = document.querySelector(".rating_state_section");
const thank_msg_section = document.querySelector(".thank_msg_section");

let rate = null;

rating_values.forEach((rate_value) => {
  rate_value.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    rate = e.target.innerHTML;
  });
});

submitBtn.addEventListener("click", () => {
  //   alert(rate);
  if (rate) {
    rate_point.innerHTML = rate;
    rating_state_section.classList.add("hidden");
    thank_msg_section.classList.remove("hidden");
  }
});
