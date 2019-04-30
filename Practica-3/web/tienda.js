function CargarJsonLocal{
    var request2 = new XMLHttpRequest();
    request2.open("GET", "libros.json", false);
    request2.send()
    console.log(request2.responseType);
    var libros2 = JSON.parse(request2.responseText);
    console.log(libros2);
}

function finder(){
    var dataList = document.getElementById("productos");
    var results = CargarJsonLocal("assets/products.json")
    var filtered_array = [];
    
    for (const result in results) {        
        results[result].forEach(element => {
            filtered_array.push(element.name)
            // Create a new <option> element.
            var option = document.createElement('option');
            option.value = element.name;
            dataList.appendChild(option);
        });
        
        // if (results.hasOwnProperty(result)) {
        //     filtered_array.push(results.filter(obj => obj.name[0] == presskey))
        // }
    }
}