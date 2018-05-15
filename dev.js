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

	/*function showTable()
	{
		let table = document.createElement("table");
		let tr = document.createElement("tr");
		for(int i=0; i<3; i++)
		{
			let th = document.createElement("th");
			th.value = "sth";
			tr.appendChild(th);
		}

		table.appendChild(tr);
	}*/
	pGoesOut();
}
