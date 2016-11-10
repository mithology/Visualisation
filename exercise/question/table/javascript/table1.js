var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var appendRow = function appendRow(scale, value) {
    var row = d3.select('tbody').append('tr');
    row.append('td').text(value);
    row.selectAll('td').data(data, function (d) {
        return d;
    }).enter().append('td').text(function (d) {
        return scale(d);
    });
};

var createTable = function createTable() {

    var table = d3.select('body').append('table');

    var tbody = table.append('tbody');

    var log = function log(d) {
        return d3.scaleLog()(d).toFixed(2);
    };

    appendRow(d3.scaleLinear(), 'Title');
    appendRow(d3.scaleLinear(), 'N');
    appendRow(d3.scalePow().exponent(2), 'Square of N');
    appendRow(log, 'Log(N)');
    appendRow(d3.scaleLog().rangeRound([0, 2]), 'Log(N) Rounded');
};

var loadTable = function loadTable() {
    return createTable();
};

window.onload = loadTable;