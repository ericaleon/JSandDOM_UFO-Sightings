// grab from data.js
var tableData = data;

// // WIP: set up function for retrieving filtered data (to loop through in submit handler)
// function filterThrough(inputVal, index) {
//   if (inputVal ==! "") {
//     filteredData = filteredData.filter(entry => entry.index == inputVal);
//   }
// }

// Select the submit button
var submit = d3.select("#filter-btn");

// submit handler function
submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // clear "selection not found" text from screen
    d3.select("#not-found").selectAll("p").remove();

    // select elements and define input values for each filter criteria
    var inputElementDate = d3.select("#datetime");
    var inputValueDate = inputElementDate.property("value");

    var inputElementCity = d3.select("#city");
    var inputValueCity = inputElementCity.property("value");

    var inputElementState = d3.select("#state");
    var inputValueState = inputElementState.property("value");

    var inputElementCountry = d3.select("#country");
    var inputValueCountry = inputElementCountry.property("value");

    var inputElementShape = d3.select("#shape");
    var inputValueShape = inputElementShape.property("value");

    // // WIP: set up key-value pair object for use in filtering function
    // var inputDict = {
    //   datetime: inputValueDate, 
    //   city: inputValueCity, 
    //   state:inputValueState, 
    //   country: inputValueCountry, 
    //   shape: inputValueShape
    // };

    // set initial value for filteredData
    var filteredData = tableData;

    console.log(filteredData)

   
    // // WIP: use a function to simplify repetetive filtering
    // inputDict.forEach(filterThrough);

    // Conditions for filtering through dataset
    if (inputValueDate !== "") { 
    filteredData = filteredData.filter(sighting => sighting.datetime === inputValueDate);
    }

    if (inputValueCity !== "") {
    filteredData = filteredData.filter(sighting => sighting.city === inputValueCity);
    }

    if (inputValueState !== "") {
    filteredData = filteredData.filter(sighting => sighting.state === inputValueState);
    }

    if (inputValueCountry !== "") {
    filteredData = filteredData.filter(sighting => sighting.country === inputValueCountry);
    }

    if (inputValueShape !== "") {
    filteredData = filteredData.filter(sighting => sighting.shape === inputValueShape);
    }

    console.log(filteredData)

// select table body and clear any previous data
var tbody = d3.select("tbody")
tbody.selectAll("tr").remove();

// Text to display if filtered table is empty
if (filteredData == "") {
  d3.select("#not-found").append("p").text("Selection not found");
}

// loop to populate rows of table data
filteredData.forEach((fd) => {
    var row = tbody.append("tr");
    Object.entries(fd).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


});