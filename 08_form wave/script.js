const label = document.querySelectorAll(".form-control label");

label.forEach((l) => {
  l.innerHTML = l.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
});
