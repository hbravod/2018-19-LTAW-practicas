function CargarJsonLocal{
    var request2 = new XMLHttpRequest();
    request2.open("POST", "libros.json", false);
    request2.send()
    console.log(request2.responseType);
    var libros2 = JSON.parse(request2.responseText);
    console.log(libros2);
}