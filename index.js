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
		addVid("vid1","https://www.youtube.com/embed/B5qxyEtMk8U");
		addVid("vid2","https://www.youtube.com/embed/B5qxyEtMk8U");
		//addImage();
	}
	
	setTimeout(function() {
				waitText();
			  }, 122000); 

	function addVid(id, source)
	{
		var vid1 = document.createElement("iframe");
		vid1.setAttribute("id", id);
		vid1.width = "560";
		vid1.height = "315";
		vid1.setAttribute("src", source);
		vid1.style.margin = "0px 0px 0px 100px";
		document.body.appendChild(vid1); 
	}


	function addImage()
	{
		var wikiImage = new Image(500,500);
		wikiImage.src = 'https://www.google.bg/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwigraDgx-nZAhWJ2SwKHYLTB70QjRwIBg&url=http%3A%2F%2Fmunicipalmagazine.com%2F2017%2F04%2Fdont-just-let-it-happen-take-charge-of-your-wiki%2F&psig=AOvVaw3jf6Z_gqdLiPhUxRFWI1Gy&ust=1521039144162140';
		wikiImage.id = 'wikiImg';
		document.body.appendChild(wikiImage);
	}
}
