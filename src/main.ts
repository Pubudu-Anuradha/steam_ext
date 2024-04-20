import InitStyles, { CopyIcon } from "./styles";
import showToast from "./toast";

InitStyles();

type WorkShopItem = Partial<{
  name: string;
  author: string;
  description: string;
  link: string;
  itemId: string;
  appId: string;
  command: `workshop_download_item ${string} ${string}`;
}>;

const appIdRegex = /^.*appid=(\d+)$/;
const itemIdRegex = /^.*\?id=(\d+)$/;

Array.from(document.querySelectorAll(".collectionItem")).forEach((item) => {
  const wsItem: WorkShopItem = {
    name: item.querySelector(".workshopItemTitle")?.textContent,
    description: item.querySelector(".workshopItemShortDesc")?.textContent,
  };
  const authorLink = item.querySelector(".workshopItemAuthorName > a");
  wsItem.author = authorLink?.textContent;
  if (authorLink.hasAttribute("href")) {
    const href = authorLink.getAttribute("href");
    if (href && appIdRegex.test(href)) {
      const matches = href.match(appIdRegex);
      if (matches[1]) {
        wsItem.appId = matches[1];
      }
    }
  }

  const link = item.querySelector(".workshopItem > a");
  if (link.hasAttribute("href")) {
    wsItem.link = link.getAttribute("href");
    if (wsItem.link) {
      const match = wsItem.link.match(itemIdRegex);
      if (match[1]) {
        wsItem.itemId = match[1];
      }
    }
  }

  if (wsItem.itemId && wsItem.appId) {
    wsItem.command = `workshop_download_item ${wsItem.appId} ${wsItem.itemId}`;
  }

  const subscriptionControlsBox = item.querySelector(".subscriptionControls");

  if (subscriptionControlsBox && wsItem.command) {
    const button = document.createElement("button");
    button.className = "mod-copy-button";
    button.innerHTML = CopyIcon;

    button.addEventListener("click", () => {
      // Copy the command
      navigator.clipboard.writeText(wsItem.command);
      showToast(`Copied ${wsItem.name}: ${wsItem.command}`, button);
    });

    subscriptionControlsBox.appendChild(button);
  }
});
