document.addEventListener("DOMContentLoaded", function() {
  const editor1 = document.getElementById("editor1");
  const previewer1 = document.getElementById("previewer1");

  editor1.addEventListener("input", function() {
      const markdownText = editor1.innerText;

      const htmlText = marked(markdownText, { breaks: true });

      previewer1.innerHTML = htmlText;
  });
});