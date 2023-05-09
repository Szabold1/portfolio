const tiltElements = document.querySelectorAll(`[data-tilt]`);

// Disable tilt on touchscreen devices
document.addEventListener("touchstart", () => {
  for (let i = 0, len = tiltElements.length; i < len; i++) {
    tiltElements[i].vanillaTilt.destroy();
  }
});
