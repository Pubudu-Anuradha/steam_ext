export const CopyIcon = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    class="bi bi-clipboard2-plus"
    viewBox="0 0 16 16"
  >
    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
    <path d="M8.5 6.5a.5.5 0 0 0-1 0V8H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V9H10a.5.5 0 0 0 0-1H8.5z" />
  </svg>`;

let ran = false;
const styles = `
/* Styles for the toast container */
.toast-container {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 1);
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 99999999;
}

/* Styles for the toast message */
.toast-message {
    font-size: 16px;
}
/* Styles for copy button */
.mod-copy-button {
  padding: 0.2rem;
  border: none;
  border-radius: 0.2rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  background-color: orange;
}`;

export default () => {
  if (!ran) {
    ran = true;
    var styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);
  }
};
