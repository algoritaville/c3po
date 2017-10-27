// Update…
var p = d3.select(".chart")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .text(function(d) { return d; })

// Enter…
p.enter().append("p")
    .style("background-color", "#121212")
    .style("color", "#2299FF")
    .style("padding", "0.25vh 0.5vh 0.25vh 0.5vh ")
    .text(function(d) { return "This is paragraph " + d; })
// Exit…
p.exit().remove()
