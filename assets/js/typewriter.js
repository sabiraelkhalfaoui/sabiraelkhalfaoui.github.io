document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "Cryptographer.",
    "Zero-Knowledge Enthusiast.",
    "Rust Developer.",
    "Researcher in Post-Quantum Crypto."
  ];
  let index = 0;
  let charIndex = 0;
  const speed = 100;
  const element = document.getElementById("typewriter");

  function type() {
    if (charIndex < texts[index].length) {
      element.innerHTML += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, speed);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      element.innerHTML = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, speed / 2);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(type, speed);
    }
  }

  type();
});
