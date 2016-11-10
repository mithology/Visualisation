var data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var createTable = function createTable() {

    var box = d3.select('body').append('div');

    var scale = d3.scaleLinear()
        .domain([0, 10])
        .range(['italic bold 12px/30px Arial, serif', 'italic bold 120px/300px Arial, serif']);

    box.selectAll('div')
        .data(data)
        .enter().append('div')
        .style('font', function (d) {
            return scale(d);
        }).classed('box', true)
        .text(function (d) {
            return d;
        });
};

window.onload = createTable;