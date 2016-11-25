var quantileValue, set;
var message = "Please Enter value";

var showUserValue = function (div, data) {
    d3.select(div).html("");
    var elementDiv = d3.select(div).append('div');
    elementDiv.append('span')
        .attr('class', 'title')
        .text(data.title);

    elementDiv.append('span')
        .attr('class', 'value')
        .text(data.method);
};

var sortByMethod = function (methodName, method) {
    if (set == '' || !set) {
        alert(message)
    } else {
        return showUserValue('.container', {
            title: methodName + ' of numbers :-  ', method: method(set)
        });
    }
};

var sortByQuantile = function () {
    if (!quantileValue) {
        alert(message)
    } else {
        return showUserValue('.container', {
            title: 'Quantile of number :-  ', method: d3.quantile(set, quantileValue)
        });
    }
};

var dataStore = function () {
    var inputValues = (document.getElementById('numberValue').value).split(',');
    set = inputValues.filter(function (d) {
        return d;
    });
    if (set == '') {
        alert(message);
        d3.select('.value').html("");
    } else {
        d3.select('.value').html("");
        showUserValue('.value', {
            title: 'Entered numbers are :-  ', method: set
        });
    }
    document.getElementById("numberValue").value = '';

};

var quantile = function () {
    quantileValue = (document.getElementById('quantileValue').value).split(',')[0];
    if (quantileValue != "") {
        d3.select('.quantileValue').html("");
        showUserValue('.quantileValue', {
            title: 'Entered quantile value is :-  ', method: quantileValue
        });
    } else {
        alert(message);
        d3.select('.quantileValue').html("");
    }
    document.getElementById("quantileValue").value = '';
};
var validateInput = function (event) {
    var theEvent = event || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /[(0-9),]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
};
