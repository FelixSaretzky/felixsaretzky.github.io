/* Render Mermaid code blocks with Pele, hiding the source block.
    Pele takes its colors from CSS variables, so the diagrams follow the light/dark theme without re-rendering */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre>code.language-mermaid, .language-mermaid pre>code").forEach((elem) => {
    const source = elem.textContent;
    const block = elem.closest(".language-mermaid.highlighter-rouge") || elem.parentElement;
    block.classList.add("unloaded");
    const diagram = document.createElement("div");
    diagram.classList.add("pele-diagram");
    block.after(diagram);
    /* zoom by pinch, Ctrl/Cmd + wheel or double-click; the buttons would cover wide diagrams */
    pele.mount(diagram, source, { zoom: { controls: false } });
  });
});
