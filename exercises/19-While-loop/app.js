
//fix this function:
function startCounting()
{
	let counter = 0;
	while (true) {
		console.log(counter);
		counter = counter + 1;
		if (counter > 100) {
			break;
		}
	}
	
	return counter;
}

startCounting();