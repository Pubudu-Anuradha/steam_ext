const deleteQueue: HTMLElement[] = [];

export default (message: string, element = document.body): void => {
  for (const toDelete of deleteQueue) {
    if (toDelete.parentElement) {
      toDelete.parentElement.removeChild(toDelete);
    }
  }

  var toastContainer = document.createElement("div");
  var toastMessage = document.createElement("div");

  toastContainer.classList.add("toast-container");
  toastMessage.classList.add("toast-message");

  toastMessage.textContent = message;
  toastContainer.appendChild(toastMessage);
  element.appendChild(toastContainer);
  deleteQueue.push(toastContainer);

  setTimeout(function () {
    if (toastContainer.parentElement) {
      try {
        element.removeChild(toastContainer);
      } catch (error) {
        // ignore error
      }
    }
  }, 1000);
};
