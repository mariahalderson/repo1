//listen for a key press; if we press the right key, then find the matching audio file and play it. 
//if the key doesn't show up on the keyboard, the script shouldn't do anything.


(() => {
	console.log('drumkit');

	// remove highlight from each element
	function removeHighlight(e){
		console.log(e);

		//if this isn't the transform transition, then quit.
		if(e.propertyName !== 'transform'){
			return;
		} else { //it IS the transform transition! do stuff!
			e.target.classList.remove('playing'); //take highlight back off
		}
	}


//this should fire every time a key is pressed; do something interesting inside this function
	function playSound(e){
		//debugger;
		console.log(e.keyCode);
		const audio = 
		document.querySelector(`audio[data-key="${e.keyCode}"]`);

		const key = 
		document.querySelector(`div[data-key="${e.keyCode}"]`);
		//add highlight to the element on screen (the key pressed)

		key.classList.add('playing');

		//if we press a key that doesn't have a corresponding element, then quit and don't do anything
		if(!audio) { return;}
		
		//rewind any audio files b4 playing it
		
		audio.currentTime= 0;
		audio.play();
		//debugger;
	}

//tell the browser to listen for a keypress evemt
	window.addEventListener('keydown', playSound);


	//loop through all the keys and take the highlight back off when transition is done
	const keys = Array.from(document.querySelectorAll('.key'));//select all key divs
	keys.forEach(key => key.addEventListener('transitionend', removeHighlight));
})();
