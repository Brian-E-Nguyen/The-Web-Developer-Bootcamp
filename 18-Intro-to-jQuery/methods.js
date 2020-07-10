// text();
var h1Text = $("h1").text();
var lis = $("li").text(); // SkittlesStarburstTwix

$("h1").text("New text!");
$("li").text("Mimi and Kiki, Brian's dogs, are adorable");

// .html();
var ul = $("ul").html();
$('ul').html("<li>I hacked your UL!</li><li>Mimi is the best</li>")

// attr();
$('img').css("width", "500px")
var originalImageSourc = $('img').attr("src");

// $("input").attr("type", "color");
$('img').css("width", "200px");

$("img:first-of-type").attr("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff7%2FPomeranianhenna.jpg%2F220px-Pomeranianhenna.jpg&f=1&nofb=1");
$("img").last().attr('src', "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff7%2FPomeranianhenna.jpg%2F220px-Pomeranianhenna.jpg&f=1&nofb=1");

$('input').val();