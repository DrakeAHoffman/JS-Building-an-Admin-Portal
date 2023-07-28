
// Your Code Here
async function main(){

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()


    for (let index = 0; index < books.length; index++) {
        const element = books[index];
        
        let root = document.querySelector("#root");

        let li = document.createElement("li");
        li.textContent = element.title;

        let quantityInput = document.createElement("input");
        quantityInput.value = element.quantity;

        let saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.addEventListener("click", saveBooks)

        async function saveBooks() {

            let response = await fetch('http://localhost:3001/updateBook', {
            method:"PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: element.id,
                quantity: quantityInput.value
            })
        })
        }

        li.append(quantityInput, saveButton);

        root.append(li);

    
    }
}


  main()

    


