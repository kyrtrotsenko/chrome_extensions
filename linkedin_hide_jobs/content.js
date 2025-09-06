function hideUnwantedJobs(excludeStrings) {
  const listItems = document.querySelectorAll('li');
  for (let i = listItems.length - 1; i >= 0; i--) {
    const li = listItems[i];
    for (const exclude of excludeStrings) {
      if (exclude && li.textContent.includes(exclude)) {
        li.style.display = 'none';
        break;
      }
    }
  }
}

function runFilter() {
  chrome.storage.sync.get(['excludeStrings'], function (data) {
    const excludeStrings = data.excludeStrings || [];
    hideUnwantedJobs(excludeStrings);
  });
}

// Initial run
runFilter();

// Observe DOM changes (for dynamic content)
const observer = new MutationObserver(runFilter);
observer.observe(document.body, { childList: true, subtree: true });