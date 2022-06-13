("#btn-save").click( function() {
    event.preventDefault();
    var text = ("#textarea").val();
    var filename = file.txt;
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, filename+".txt");
    console.log("done");
});