// ===== Show/Hide Comments =====
const showHideBtn = document.querySelector('#toggle-comments'); // now a <button>
const commentWrapper = document.querySelector('.comment-wrapper');

// Start hidden
commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria-expanded', 'false');

showHideBtn.addEventListener('click', () => {
  const expanded = showHideBtn.getAttribute('aria-expanded') === 'true';
  showHideBtn.setAttribute('aria-expanded', String(!expanded));
  showHideBtn.textContent = expanded ? 'Show comments' : 'Hide comments';
  commentWrapper.style.display = expanded ? 'none' : 'block';
});

// ===== Add Comment =====
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Basic validation
  if (!nameField.value.trim() || !commentField.value.trim()) {
    alert('Please fill out both fields before submitting.');
    return;
  }

  submitComment();
});

function submitComment() {
  const listItem = document.createElement('li');

  const namePara = document.createElement('p');
  namePara.textContent = nameField.value;
  namePara.style.fontWeight = 'bold';

  const commentPara = document.createElement('p');
  commentPara.textContent = commentField.value;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  // Reset form
  nameField.value = '';
  commentField.value = '';
}