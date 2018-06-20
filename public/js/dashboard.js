const submit = document.querySelector("form input[type='submit']");
submit.addEventListener("click", addBook);

function addBook() {
    const inputs = document.querySelectorAll("input");
    console.log(inputs[0].value);
    let newBook = {
        author: inputs[0].value,
        title: inputs[1].value,
        publisher: inputs[2].value,
        language: inputs[3].value,
        pages: inputs[4].value,
        year: inputs[5].value
    }
    fetch("/admin/add-book", {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    }).then(result => result.json()).then(result => checkStatus(result));
}

function checkStatus(result){
  console.log(result);  
};
