function scrollToContent() {
  const contentElement = document.getElementById("header-nav");

  if (contentElement && window.innerWidth > 768) {
    contentElement.scrollIntoView({
      //behavior: "smooth",
      block: "start", // Alinha o topo do elemento com o topo da janela
      inline: "nearest",
    });
  }
}
