const WIDTH = 800;
const HEIGHT = 600;
const MARGIN = 30;

var data = [
    {x: 0, y: 5}
    , {x: 1, y: 9}
    , {x: 2, y: 7}
    , {x: 3, y: 5}
    , {x: 4, y: 3}
    , {x: 6, y: 4}
    , {x: 7, y: 2}
    , {x: 8, y: 3}
    , {x: 9, y: 2}];
var sinData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var curveArray = [
    {"d3Curve": d3.curveLinear},
    {"d3Curve": d3.curveLinearClosed},
    {"d3Curve": d3.curveStepAfter},
    {"d3Curve": d3.curveBasis},
    {"d3Curve": d3.curveBundle},
    {"d3Curve": d3.curveCardinal},
    {"d3Curve": d3.curveCardinalClosed},
    {"d3Curve": d3.curveCatmullRom}
];

var interpolation = function () {
    curveArray.forEach(function (x) {
        loadChart(x)
    });

};

var xScale = d3.scaleLinear()
    .domain([0, 1])
    .range([0, HEIGHT - (2 * MARGIN)]);

var yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([HEIGHT - (2 * MARGIN), 0]);

var yValue = function (q) {
    return yScale(q.y / 10);
};
var xValue = function (q) {
    return xScale(q.x / 10);

};
var sinValue_X = function (q) {
    return xScale(q / 10);
};
var sinValue = function (q) {
    return yScale(Math.sin(q) / 10 + 0.5);
};
var translate = function (x, y) {
    return "translate(" + x + "," + y + ")";
};
var circleGenerator = function (xValue, yValue, data, container) {
    container.append('g').selectAll('circle').data(data)
        .enter().append('circle')
        .attr('r', 4)
        .attr('cx', xValue)
        .attr('cy', yValue);
};
var loadChart = function (x) {
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

    var line = d3.line()
        .x(xValue)
        .y(yValue)
        .curve(x.d3Curve);


    var sine = d3.line()
        .x(sinValue_X)
        .y(sinValue)
        .curve(x.d3Curve);
    g.append("path")
        .attr("d", line(data))
        .classed('line-path', true);

    g.append("path")
        .attr("d", sine(sinData))
        .classed('sine-path', true);

    circleGenerator(xValue, yValue, data, g);
    circleGenerator(sinValue_X, sinValue, sinData, g);

    g.selectAll('circle').exit().remove();

};

window.onload = interpolation;