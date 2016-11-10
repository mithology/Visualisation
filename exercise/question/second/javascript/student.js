var selected;

var data = [
    {name: 'ramesh', subject: 'maths', score: 87},
    {name: 'suresh', subject: 'maths', score: 45},
    {name: 'pokemon', subject: 'english', score: 65},
    {name: 'mary', subject: 'kannada', score: 44},
    {name: 'riya', subject: 'science', score: 72},
    {name: 'katie', subject: 'social studies', score: 82},
    {name: 'katie', subject: 'maths', score: 98},
    {name: 'ramesh', subject: 'bengali', score: 25},
    {name: 'suresh', subject: 'science', score: 55},
    {name: 'riya', subject: 'tamil', score: 75},
    {name: 'pokemon', subject: 'sports', score: 95},
    {name: 'pokemon', subject: 'social studies', score: 32}
];

var sortByName = function () {
    var result = selected.sort(function (a, b) {
        return d3.ascending(a.name, b.name);
    });
    return result;
};

var sortBySubject = function () {
    var result = selected.sort(function (a, b) {
        return d3.ascending(a.subject, b.subject);
    });
    return result;
};

var sortByScore = function () {
    var result = selected.sort(function (a, b) {
        return d3.ascending(a.score, b.score);
    });
    return result;
};


var getSubjects = function () {
    var subjects = data.map(function (d) {
        return d.subject;
    });
    return getUnique(subjects);
};

var getUnique = function (subjects) {
    return subjects.filter(function (value, index, array) {
        return array.indexOf(value) === index;
    })
};

var loadChart = function () {
    var subjects = getSubjects();
    var color = d3.scaleOrdinal(d3.schemeCategory10).domain(subjects);
    var chart = d3.select('.container').selectAll('div')
        .data(data, function (d) {
            return d.score
        });
    selected = chart.enter().append('div')
        .style('width', function (d) {
            return d.score * 5 + "px"
        })
        .attr('class', 'bar-chart')
        .style('background', function (d) {
            return color(d.subject)
        })
        .text(function (d) {
            return d.name + " " + d.score
        })
};

var createLegend = function () {
    var legend = d3.select('.legend').selectAll('div')
        .data(data, function (d) {
            return getSubjects();
        });
    selected = legend.enter().append('div')
        .style('width', function (d) {
            return d.score * 5 + "px"
        })
        .attr('class', 'bar-chart')
        .style('background', function (d) {
            return color(d.subject)
        })
    };
    window.onload = loadChart;
