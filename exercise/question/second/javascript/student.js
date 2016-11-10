var studentData = [
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

var subjects = ['maths', 'english', 'kannada', 'science', 'social studies', 'bengali', 'tamil', 'sports'];
var colors = d3.scaleOrdinal(d3.schemeCategory10).domain(subjects);

var studentChart = function studentChart() {

    var bar = d3.select('.container')
        .selectAll('div').data(studentData, function (d) {
            return d.name;
        });

    bar.enter().append('div').style('width', function (d) {
        return d.score * 5 + "px";
    }).style("background-color", function (d) {
        return colors(d.subject);
    }).text(function (d) {
        return d.name + " " + d.score;
    }).attr('class', 'student-chart');

    bar.exit().remove();
};

var updateData = function updateData(val) {
    return d3.selectAll('.student-chart').sort(function (a, b) {
        return d3.ascending(a[val], b[val]);
    });
};

var sortByName = function sortByName() {
    return updateData('name');
};

var sortBySubject = function sortBySubject() {
    return updateData('subject');
};

var sortByScore = function sortByScore() {
    return updateData('score');
};

var legend = function legend() {
    return d3.select('.legend').selectAll('div')
        .data(subjects)
        .enter()
        .append('div').style('width', '70px')
        .style('background-color', function (d) {
            return colors(d);
        }).text(function (d) {
            return d;
        }).classed('legends', true);
};

window.onload = function () {
    return studentChart(), legend();
};