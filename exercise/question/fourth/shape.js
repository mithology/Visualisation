var svgContainer = d3.select("div").append("svg")
    .attr("width", 600)
    .attr("height", 102);

var line = svgContainer.append("line")
    .attr("x1", 110)
    .attr("y1", 0)
    .attr("x2", 10)
    .attr("y2", 100);
var circle = svgContainer.append("circle")
    .attr("cx", 210)
    .attr("cy", 51)
    .attr("r", 50);

var rectangle = svgContainer.append("rect")
    .attr("x", 310)
    .attr("y", 1)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("width", 101)
    .attr("height", 100);
var traingle = svgContainer.append("polygon")
    .attr("points", "460,100,460,100,510,0,560,100");

