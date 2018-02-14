function myIndex()
{

	function waitText()
	{
		var parag = document.createElement("p");
		parag.style.color = "red";
		parag.style.textAlign = "center";
		parag.style.textShadow = "3px 2px green";
		parag.style.font = "italic bold 40px Georgia, serif";
		var text = document.createTextNode("Did you like the video? Here are some more:");
		parag.appendChild(text);
		var body = document.getElementsByTagName("body")[0];
		body.appendChild(parag); 
	}
	
	setTimeout(function() {
				waitText();
			  }, 122000);
}
