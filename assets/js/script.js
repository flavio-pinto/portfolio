(function () {
  document.querySelectorAll(".control").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-ctrl").classList.remove("active-ctrl")
      this.classList.add("active-ctrl")
      document.querySelector(".active").classList.remove("active")
      document.getElementById(button.dataset.id).classList.add("active")
    })
  })
  document.querySelector(".theme-switch").addEventListener("click", () => {
    document.body.classList.toggle("light-mode")
  })
  document.getElementById("submitButton").addEventListener("click", function(e) {
    e.preventDefault()
    document.getElementById("myForm").submit()
    document.getElementById("myForm").reset()
  });
})()