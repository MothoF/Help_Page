const dialogElement = document.getElementById("search_dialog");

function showDialog(){
    dialogElement.showModal();
}

function closeDialog(){
    dialogElement.close();
}

window.addEventListener("load",() => {
    dialogElement.style.visibility = "hidden";
})

const searchTextElement = document.querySelector("body>#banner>#banner_content>#search_bar>form>input[type='text']");
searchTextElement.addEventListener("keydown",(event) => {
    if (event.key == "Enter") {
        showDialog();
        dialogElement.style.visibility = "visible";
    }
})

const buttonElement = document.getElementById("search_dialog_close_button");
buttonElement.addEventListener("click", () => {
    closeDialog();
    dialogElement.style.visibility = "hidden";
})