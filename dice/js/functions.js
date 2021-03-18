function roll(dice) {
	var response = Math.floor(Math.random() * dice.value + 1);

	if (response == 0) $("#response").text("1");
	if (response > 0) $("#response").text(response);
	else $("#response").text("Selecione algum Dado");
}