const request = value => {
    value = value.replace(/ /g, "+") ?? "";
    return `https://www.youtube.com/results?search_query=${value}`;
};

document.forms[0].addEventListener("submit", e => {
    e.preventDefault();
    const inputValue = document.getElementById("input").value;
    inputValue && window.open(request(inputValue));
})