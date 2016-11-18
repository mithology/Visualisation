var dataSet = [1, 1, 2, 2, 1, 2, 1];
var width = 800;
var height = 400;
var radius = Math.min(width, height) / 2;
var color = d3.scaleOrdinal(d3.schemeCategory20);
var loadChart = function () {
    var svg = d3.select('.container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
            ',' + (height / 2) + ')');
    var arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);
    var pie = d3.pie()
        .value(function (d) {
            return d;
        })
        .startAngle('0')
        .endAngle('3.14');

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

