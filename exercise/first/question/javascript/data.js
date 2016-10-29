var newData = function () {
    var data = [];
    for (var i = 1; i <= 10; i++) {
        data.push(Math.floor(Math.random() * 100));
    }
    return data;
};
var random = newData();
var loadBarChart = function () {
    var color = d3.scaleLinear().domain([-1, 100])
        .range(["lightblue", "#005ff9"]);

    var div = d3.select(".bar-chart").selectAll("div")
        .data(random, function (d) {
            return d;
        });
    div.enter().append("div")
        .style("width", function (d) {
            return d * 5 + "px";
        })
        .attr('class', 'bar')
        .text(function (d) {
            return d;
        })
        .style("background-color",color)

    // .attr('bar', color);
    div.exit().remove();
};

var updateChart = function () {
    random.shift();
    random.push(newData()[0]);

    loadBarChart();
};
window.onload = loadBarChart;


setInterval(function () {
    updateChart();
}, 1000);

