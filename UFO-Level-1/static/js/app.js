// from data.js
var tableData = data;

let tbody = d3.select("tbody");

function buildTable(data){

    tbody.html("");

    data.forEach((ufo) => {

        let row = tbody.append("tr");
               
        Object.entries(ufo).forEach(([key, value]) => {
           
            let cell = row.append("td");
           cell.text(value);
       });
    })
}

// function when click on the button

var button = d3.select("#filter-btn");

var form = d3.select("form");

button.on("click", runClick);
form.on("submit", runClick)

function runClick() {

    // Prevent the page from refreshing
    d3.event.preventDefault(); 

    var inputElement = d3.select(".form-control");

    var inputValue = inputElement.property("value");

        var results = tableData.filter(ufo => ufo.datetime === inputValue);

        tbody.html("");

        if (results.length === 0) {
            tbody.text(`There is no ufo results regardig on ${inputValue}.`);
        }


    else {
        results.forEach((ufo) => {
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(([key, value]) =>{
                var cell = row.append("td");
                cell.text(value);

            });
        });
    };
};