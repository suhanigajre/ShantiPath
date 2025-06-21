function like(btn) {
  const span = btn.querySelector("span");
  let c = parseInt(span.textContent);
  span.textContent = ++c;
}
function shareText(item) {
  if (navigator.share) {
    navigator.share({
      title: `ShantiPath – ${item}`,
      text: `Check this out on ShantiPath: ${item}`,
      url: window.location.href
    }).catch(console.error);
  } else {
    prompt("Copy this link to share:", window.location.href);
  }
}
