(function () {
  const script = document.currentScript;
  const projectId = script.getAttribute("data-project-id");

  // Floating button
  const btn = document.createElement("div");
  btn.innerHTML = "💬";
  btn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #4f46e5;
    color: white;
    padding: 12px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    z-index: 999999;
  `;
  document.body.appendChild(btn);

  // Iframe wrapper
  const wrapper = document.createElement("div");
  wrapper.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 900px;
    height: 90vh;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    display: none;
    z-index: 999998;
  `;
  document.body.appendChild(wrapper);

  // Iframe
  const iframe = document.createElement("iframe");
  iframe.src = `http://localhost:8000/embed?projectId=${projectId}&userId=6938e9447603e2e703244cb4`;
  iframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
  `;
  wrapper.appendChild(iframe);

  // toggle
  let open = false;
  btn.onclick = () => {
    open = !open;
    wrapper.style.display = open ? "block" : "none";
  };
})();
