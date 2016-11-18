var dataSet = [1, 1, 2, 2, 1, 2, 1];
var width = 1000;
var height = 600;
var donutWidth = 75;
var radius = Math.min(width, height) / 2;
var color = d3.scaleOrdinal().range(["#1F77B4", "#AEC7E8", "#FF7F0E", "#FFBB78", "#2CA02C", "#98DF8A", "#D62728"]);
var loadChart = function () {
    var svg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');
    var arc = d3.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);
    var pie = d3.pie()
        .value(function (d) {
            return d;
        }).startAngle('0')
        .endAngle('3.14')
        .sort(null);
    var path = svg.selectAll('path')
        .data(pie(dataSet))
        .enter()
        .append('path')
        .attr('d', arc)
        .style('fill', function (d, i) {
            return color(i);
        });
};
window.onload = loadChart;

