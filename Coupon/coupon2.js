function test() {
    document.getElementsByClassName('modal').style.visibility = "visible"
}
function closeDiv() {
    document.getElementsByClassName('modal').style.visibility = "hidden"
};


$(document).ready(function () {
    $(".modal").modal('show');
});
