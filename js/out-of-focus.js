let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Возвращайтесь к нам, мы будем рады!";
})
window.addEventListener("focus", () => {
    document.title = docTitle
})