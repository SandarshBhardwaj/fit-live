export function renderLayout(headerContent, mainContent, footerContent) {
  console.log("Rendering layout...");
  document.getElementById("site-header").innerHTML = headerContent;
  document.getElementById("main-content").innerHTML = mainContent;
  document.getElementById("site-footer").innerHTML = footerContent;
}
