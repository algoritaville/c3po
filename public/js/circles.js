var data = [{
    x: 100,
    y: 100,
    r: 5,
    c: 'red'
}, {
    x: 200,
    y: 300,
    r: 5,
    c: 'green'
}, {
    x: 300,
    y: 200,
    r: 5,
    c: 'blue'
}];

var canvas = d3.select('#canvas');
var circles = canvas
    .selectAll('circle')
    .data(data);

circles
    .enter()
    .append('circle')
    .attr('cx', function(d) {
        return d.x;
    })
    .attr('cy', function(d) {
        return d.y;
    })
    .attr('fill', function(d){
        return d.c;
    })
    .attr('r', function(d) {
        return d.r;
    });
