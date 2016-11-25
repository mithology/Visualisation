var filteredValue, bisectValue;
var massage = "Please Enter value";

var showUserValue = function (div, data) {
    d3.select(div).html("");
    var elementDiv = d3.select(div).append('div');
    elementDiv.append('span')
        .text(data.title);

    elementDiv.append('span')
        .text(data.method);
};

var sortByMethod = function (title, method) {
    if (filteredValue == '' || !filteredValue) {
        alert(massage);
        d3.select('.container').html("");
    }
    else {
        showUserValue('.container', {
            title: title + ' values are:-', method: filteredValue.sort(method)
        });
    }
};

var sortByScan = function () {
    if (filteredValue == '' || !filteredValue) {
        d3.select('.container').html("");
    }
    else {
        var scanValues = d3.scan(filteredValue, function (a, b) {
            return a - b;
        });
        showUserValue('.container', {
            title: 'Scaned value is:-', method: scanValues
        });
    }
};
var getBisector = function () {
    if (!bisectValue) {
        alert('please enter bisector value');
        d3.select('.container').html("");
    }
    else {
        var scanValues = filteredValue.sort(d3.ascending);
        var index = d3.bisect(filteredValue, bisectValue);
        showUserValue('.container', {title: 'Bisected value is:-', method: index});
    }
};

var dataStore = function () {
    var inputValues = (document.getElementById('numberValue')
        .value).split(',');
    var mappedValue = inputValues.map(function (d) {
        return parseInt(d, 10);
    });
    filteredValue = mappedValue.filter(function (d) {
        return d;
    });
    if (filteredValue == '') {
        alert(massage);
        d3.select('.value').html("");
    } else {
        d3.select('.value').html("");
        showUserValue('.value', {
            title: 'Entered numbers are :- ', method: filteredValue
        });
    }
    document.getElementById("numberValue").value = '';
};

var bisectorData = function () {
    bisectValue = (document.getElementById('bisectorValue').value).split(',')[0];
    if (bisectValue != "") {
        d3.select('.bisectorValue').html("");
        showUserValue('.bisectorValue', {
            title: 'Entered bisecter value is :- ', method: bisectValue
        });
    } else {
        alert('please enter bisector value');
        d3.select('.bisectorValue').html("");
    }
    document.getElementById("bisectorValue").value = '';
};

var validateInput = function (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /[(0-9),]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
};