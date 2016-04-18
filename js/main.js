function toggleDialog() {
    var dialog = document.getElementById("signup");
    if(dialog.style.visibility === "visible") {
        dialog.style.visibility = "hidden";
    } else {
        dialog.style.visibility = "visible";
    }
}
