document.getElementById("hideMenu").addEventListener("click", function () {
    chrome.scripting.executeScript({
        target: { tabId: chrome.tabs.TAB_ID_NONE },
        function: () => {
            const menu = document.querySelector(".chat-menu-class");
            if (menu) menu.style.display = "none";
        }
    });
});

document.getElementById("customizeMenu").addEventListener("click", function () {
    // Add customization logic here
});
