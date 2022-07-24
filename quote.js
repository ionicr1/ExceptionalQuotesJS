$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
	var acceptable = ['motivational', 'wisdom', 'humor', 'love'];
	if (acceptable.includes(topic)) {
	$.get("https://wp.zybooks.com/quotes.php", { "topic": topic, "count": count}, function(data) {
			let html = "<ol>";
			for (let c = 0; c <= count - 1; c++) {
				html += ("<li>" + data[c].quote + " - " + data[c].source + "</li>");
			}
			html += "</ol>";
			$("#quotes").html(html);
		}, "json");
	}
	else {
		let html = `Topic '${topic}' not found`;
		$("#quotes").html(html);
	}
}
