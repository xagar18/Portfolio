document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.id = "cursor";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.style.transform = `translate(-50%, -50%)`;
  });

  document.addEventListener("click", () => {
    cursor.style.animation = "cursorBounce 0.5s ease-in-out";
    setTimeout(() => {
      cursor.style.animation = "none";
    }, 500);
  });
});
