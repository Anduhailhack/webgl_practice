function main()
{
	const canv = document.getElementById("canv");
	let gl = canv.getContext("webgl");
	
	if (!gl)
	{
		console.error("Error webgl not found, trying experimental-webgl");
		gl = canv.getContext("experimental-webgl");
	}

	if (!gl)
	{
		console.error("Error webgl not found");
		return;
	}
	console.log("Working");
}
