var svgContainer = d3.select("div").append("svg")
    .attr("width", 600)
    .attr("height", 100);

var line = svgContainer.append("line")
    .attr("x1", 110)
    .attr("y1", 0)
    .attr("x2", 10)
    .attr("y2", 100);
var circle = svgContainer.append("circle")
    .attr("cx", 220)
    .attr("cy", 50)
    .attr("r", 50);


var rectangle = svgContainer.append("rect")
    .attr("x", 300)
    .attr("y", 0)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("width", 100)
    .attr("height", 100);

var traingle = svgContainer.append("polygon")
    .attr("points", "460,100,460,100,510,0,560,100");

