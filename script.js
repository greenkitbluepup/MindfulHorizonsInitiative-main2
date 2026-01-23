(() => {
  const field = document.getElementById("bubbleField");
  if (!field) return;

  const reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const BUBBLE_COUNT = 14;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function makeBubble() {
    const b = document.createElement("span");
    b.className = "bubble";

    const size = rand(20, 72);
    const left = rand(2, 98);
    const duration = rand(18, 36);
    const delay = -rand(0, duration);
    const blur = rand(0, 1.2);

    b.style.setProperty("--size", `${size}px`);
    b.style.setProperty("--left", `${left}%`);
    b.style.setProperty("--duration", `${duration}s`);
    b.style.setProperty("--delay", `${delay}s`);
    b.style.setProperty("--blur", `${blur}px`);

    if (reduce) {
      b.style.animation = "none";
      b.style.opacity = "0.15";
    }

    return b;
  }

  field.innerHTML = "";
  for (let i = 0; i < BUBBLE_COUNT; i += 1) {
    field.appendChild(makeBubble());
  }
})();
