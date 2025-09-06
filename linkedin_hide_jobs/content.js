function hideUnwantedJobs() {
  const listItems = document.querySelectorAll('li');
  for (let i = listItems.length - 1; i >= 0; i--) {
    const li = listItems[i];
    if (
      li.textContent.includes('Promoted') ||
      li.textContent.includes('We won’t show you this job again.')
    ) {
      li.style.display = 'none';
    }
  }
}

// Run once when the page is loaded
hideUnwantedJobs();

// Optional: Run again if the page is dynamically updated (LinkedIn uses React, so jobs may appear after initial load)
const observer = new MutationObserver(hideUnwantedJobs);
observer.observe(document.body, { childList: true, subtree: true });