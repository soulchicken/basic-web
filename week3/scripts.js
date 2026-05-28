let root = document.getElementById("root");

let uploadButton = document.getElementById("upload");
let titleInput = document.getElementById("title");
let bodyTextarea = document.getElementById("body");

let data = [];

function render() {
    root.innerText = ""; // 화면 초기화

    for (let i = 0; i < data.length; i++) {
        let h2 = document.createElement("h2");
        let p = document.createElement("p");

        h2.innerText = data[i].title;
        p.innerText = data[i].body;
        
        root.appendChild(h2);
        root.appendChild(p);
    }
}

function buttonClick() {
    let titleValue = titleInput.value;
    let bodyTextValue = bodyTextarea.value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titleValue,
        body: bodyTextValue,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        data.push(json);
        render();
    });
}

uploadButton.addEventListener("click", buttonClick);