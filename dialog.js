const dialogElement = document.getElementById("search_dialog");

function showDialog(){
    dialogElement.showModal();
}

function closeDialog(){
    dialogElement.close();
}

const searchTextElement = document.querySelector("body>#banner>#banner_content>#search_bar>form>input[type='text']");
searchTextElement.addEventListener("keydown",(event) => {
    if (event.key == "Enter") {
        showDialog();
    }
});

const buttonElement = document.getElementById("search_dialog_close_button");
buttonElement.addEventListener("click", closeDialog());