
let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = localStorage.getItem("apiKey"); // Just get the key without redirect

// function to check API key when needed
function checkApiKey() {
    if (!apiKey) {
        window.open("enter-api-key.html", "_self");
    }
}