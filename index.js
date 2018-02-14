function myIndex()
{

	function waitText()
	{
		var parag = document.createElement("p");
		parag.style.color = "white";
		var text = document.createTextNode("Did you like the video?");
		parag.appendChild(text);
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(parag); 
	}

	
	setTimeout(function() {
				waitText();
			  }, 122000);
}
