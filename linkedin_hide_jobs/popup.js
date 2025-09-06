document.addEventListener('DOMContentLoaded', function () {
  const excludeInput = document.getElementById('excludeStrings');
  const saveBtn = document.getElementById('saveBtn');

  // Load saved strings
  chrome.storage.sync.get(['excludeStrings'], function (data) {
    excludeInput.value = (data.excludeStrings || []).join(', ');
  });

  // Save strings
  saveBtn.addEventListener('click', function () {
    const input = excludeInput.value.split(',').map(s => s.trim()).filter(Boolean);
    chrome.storage.sync.set({ excludeStrings: input }, function () {
      saveBtn.textContent = 'Saved!';
      setTimeout(() => (saveBtn.textContent = 'Save'), 1000);
    });
  });
});