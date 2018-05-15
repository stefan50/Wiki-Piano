function myDev()
{
	function pGoesOut()
	{
		var par = document.getElementById("goesOut");
		par.addEventListener("click", function()
										{
											par.remove();
											alert("Very well! You found the unneeded text! Such observation skills will definitely come in handy when playing the game!");
										});
	}

	function dunno()
	{
		var par = document.getElementById("quote");
	}

	pGoesOut();
}
