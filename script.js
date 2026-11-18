(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const root = document.documentElement;
  const spotlight = document.getElementById("spotlight");
  const stageInner = document.getElementById("stage-inner");
  const themeToggle = document.getElementById("theme-toggle");
  const canvas = document.getElementById("ambient-canvas");
  const ctx = canvas.getContext("2d");

  // Theme persistence
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  }

  themeToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  // Smooth spotlight & 3D subtle tilt
  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;

  window.addEventListener("pointermove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  window.addEventListener("pointerleave", () => {
    targetX = window.innerWidth / 2;
    targetY = window.innerHeight / 2;
  });

  // Subtle click/tap ripple
  document.addEventListener("pointerdown", (e) => {
    if (prefersReducedMotion || e.target.closest("#theme-toggle")) return;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  });

  // Ambient floating golden dust motes
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let particles = [];

  function initParticles() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(36, Math.max(16, Math.floor((width * height) / 42000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 0.7 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.18,
      vy: -0.08 - Math.random() * 0.22,
      alpha: 0.14 + Math.random() * 0.42,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  initParticles();
  window.addEventListener("resize", initParticles);

  function getParticleRgb() {
    return getComputedStyle(root).getPropertyValue("--particle-rgb").trim() || "232, 201, 126";
  }

  function animate(time) {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    spotlight.style.setProperty("--mx", `${currentX}px`);
    spotlight.style.setProperty("--my", `${currentY}px`);

    if (!prefersReducedMotion) {
      const normX = (currentX / Math.max(width, 1) - 0.5) * 2;
      const normY = (currentY / Math.max(height, 1) - 0.5) * 2;
      const rotateY = normX * 7;
      const rotateX = -normY * 5;
      stageInner.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;

      ctx.clearRect(0, 0, width, height);
      const rgb = getParticleRgb();

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const twinkle = 0.65 + 0.35 * Math.sin(time * 0.0014 + p.phase);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${(p.alpha * twinkle).toFixed(3)})`;
        ctx.fill();
      }
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
