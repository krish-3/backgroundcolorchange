var index=0;
var items = ["red","blue","orange","yellow","green","purple"];
$("button").click(function () {
    $("body").css("background-color", items[index++]);
    if (index>items.length) {
        index=0;
    }
})