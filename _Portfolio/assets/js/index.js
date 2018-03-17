var portfolioMap = {
    "connect-up": "#connect-up-info",
    "cpu-tax-calc": "#cpu-tax-calc-info",
    "ejk-watch": "#ejk-watch-info",
    "envi-defenders": "#envi-defenders-info",
    "hungry-games": "#hungry-games-info",
    "grabeteh": "#grabeteh-info"
};

var connectUpButton = document.querySelector("#connect-up");
connectUpButton.addEventListener("click", function() {
    showPortfolioContent(this);
});
var cpuButton = document.querySelector("#cpu-tax-calc");
cpuButton.addEventListener("click", function() {
    showPortfolioContent(this);
});
var ejkWatchButton = document.querySelector("#ejk-watch");
ejkWatchButton.addEventListener("click", function() {
    showPortfolioContent(this);
});
var enviButton = document.querySelector("#envi-defenders");
enviButton.addEventListener("click", function() {
    showPortfolioContent(this);
});
var hungryButton = document.querySelector("#hungry-games");
hungryButton.addEventListener("click", function() {
    showPortfolioContent(this);
});
var grabetehButton = document.querySelector("#grabeteh");
grabetehButton.addEventListener("click", function() {
    showPortfolioContent(this);
});

var portfolioButtons = [connectUpButton, cpuButton, ejkWatchButton, enviButton, hungryButton, grabetehButton];

function showPortfolioContent(clickedButton) {
    portfolioButtons.forEach(function(button) {
        var content = document.querySelector(portfolioMap[button.id]);

        if (clickedButton.id !== button.id) {
            content.style.display = "none";
            button.classList.remove("selected");
        } else {
            content.style.display = "table";
            button.classList.add("selected");
        }
    });
}