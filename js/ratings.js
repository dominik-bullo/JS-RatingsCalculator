function collect_ratings() {
  let ratings = {
    count: 0,
    sum: 0,
    average: 0,
  };
  let rating = 0;
  const elements = document.querySelectorAll(".rating");
  elements.forEach(function (element) {
    rating = parseInt(element.id.replace("star", ""));
    ratings.count += parseInt(element.value);
    ratings.sum += parseInt(element.value) * rating;
    console.log(
      `element.value: ${element.value}, rating: ${rating}, ratings.count: ${ratings.count}, ratings.sum: ${ratings.sum}`
    );
  });
  if (ratings.count !== 0) {
    ratings.average = ratings.sum / ratings.count;
    return ratings;
  }
}
document.addEventListener("change", function () {
  let ratings = collect_ratings();
  document.querySelector("#average").value = ratings.average.toFixed(2);
});
