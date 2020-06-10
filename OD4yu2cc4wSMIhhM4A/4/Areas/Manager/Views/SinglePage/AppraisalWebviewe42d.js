$(document).ready(function () {
    $('#mainPicture').click(function fn() {
        ShowPicture($("#mainPicture").attr("src"));
    });
});

function ShowPicture(Url) {
    var pictureWindow = window.open("", "", "status=0, toolbar=0, location=0, menubar=0, directories=0, resizable=1, scrollbars=1");

    pictureWindow.resizeTo(1053, 806);
    pictureWindow.document.write("<" + "html" + "><" + "head" + "></" + "head" + "><" + "body" + "><img id=\"picture\" src='" + Url + "' style=\"position: absolute; top:0; left:0\" onclick=\"window.close()\" /></" + "body" + "></" + "html" + ">");
}

function ShowPictureInFrame(Src) {
    var mainPicture = $('#mainPicture');
    if (mainPicture !== undefined && mainPicture !== null) {
        mainPicture.attr("src", Src);    
    }

    var mainPictureNoPopup = $('#mainPictureNoPopup');
    if (mainPictureNoPopup !== undefined && mainPictureNoPopup !== null) {
        mainPictureNoPopup.attr("src", Src);
    }
}