const WIDTH = 800;
const HEIGHT = 600;
const MARGIN = 30;


var sinData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var xScale = d3.scaleLinear()
    .domain([0, 1])
    .range([0, HEIGHT - (2 * MARGIN)]);

var yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([HEIGHT - (2 * MARGIN), 0]);

var sinValueX = function (q) {
    return xScale(q / 10);
};

var sinValueY = function (x) {
    return yScale(((3 * (Math.sin(x))) + 5) / 10);
};
var translate = function (x, y) {
    return "translate(" + x + "," + y + ")";
};
var circleGenerator = function (xValue, yValue, data, container) {
    container.append('g').selectAll('circle').data(data)
        .enter().append('circle')
        .attr('r', 5)
        .attr('cx', xValue)
        .attr('cy', yValue);
};
var loadChart = function () {
    var svg = d3.select('.container').append('svg')
        .attr('width', WIDTH)
        .attr('height', HEIGHT);
    var xAxis = d3.axisBottom(xScale).ticks(10);
    var yAxis = d3.axisLeft(yScale).ticks(10);

    svg.append('g')
        .attr('transform', 'translate(' + MARGIN + ', ' + (HEIGHT - MARGIN) + ')')
        .call(xAxis);

    svg.append('g')
        .attr('transform', 'translate(' + (MARGIN) + ', ' + MARGIN + ')')
        .call(yAxis);

    var g = svg.append('g')
        .attr('transform', translate(MARGIN, MARGIN));

    var sine = d3.line()
        .x(sinValueX)
        .y(sinValueY);

    g.append("path")
        .attr("d", sine(sinData))
        .classed('line-path', true);

    var area = d3.area()
        .x(sinValueX)
        .y0(HEIGHT - 2 * MARGIN)
        .y1(sinValueY);

    g.append("path")
        .attr("d", area(sinData))
        .classed('area-path', true);

    g.selectAll('circle').exit().remove();

    circleGenerator(sinValueX, sinValueY, sinData, g);
};

// var tensionArray = [
//     {'d3Curve': d3.curveCardinal.tension(-1.5)},
//     {'d3Curve': d3.curveCardinal.tension(-1)},
//     {'d3Curve': d3.curveCardinal.tension(-0.5)},
//     {'d3Curve': d3.curveCardinal.tension(0.5)},
//     {'d3Curve': d3.curveCardinal.tension(1)}
// ];
//
// var tensionInterpolate = function tensionInterpolate() {
//     return tensionArray.forEach(function (x) {
//         return loadChart(x);
//     });
// };
// window.onload = tensionInterpolate;
window.onload = loadChart;