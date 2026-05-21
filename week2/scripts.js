let root = document.getElementById("root");
let postsButton = document.getElementById("posts");

function onButtonClick() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => render(json));
}

postsButton.addEventListener("click", onButtonClick);

function render(data) {
    for (let i = 0; i < data.length; i++) {
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
    
        h2.innerText = data[i].title;
        p.innerText = data[i].body;
    
        root.appendChild(h2);
        root.appendChild(p);
    }
}
