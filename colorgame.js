var squares = document.querySelectorAll(".square");
var h1 = document.querySelector(".h1");
var span = document.querySelector("span");
var span1 = document.querySelector(".retry");
var play = document.querySelector(".play")
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var attempts = document.querySelector(".attempts");
// var better = document.querySelector(".better")
var count = 0;
var r,g,b;
var rgb = [];
var randomColor;

for (var i=0; i<squares.length; i++) {
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	rgb.push('rgb(' + r + ', ' + g + ', ' + b + ')');
	squares[i].style.background = rgb[i]
}
randomColor = Math.floor(Math.random() * rgb.length);

h1.style.color = "white"
span.textContent = rgb[randomColor]
	
for (var i=0; i<squares.length; i++) {
	squares[i].addEventListener("click", function() {
		if(this.style.background == rgb[randomColor]) {
			play_single_sound();
			span1.textContent = "Correct!";
			play.textContent = "PLAY AGAIN?"
			h1.style.background = rgb[randomColor]
			attempts.textContent = count+1;
			for (var i=0; i<squares.length; i++)
				squares[i].style.background = rgb[randomColor];
		}
		else {
			play_single_sounds();
			count++;
			this.style.background = "#232323"
			span1.textContent = "Try Again";
		}
	});
}

easy.classList.remove("easy")
easy.addEventListener("click", test) 
	function test() {
 		rgb = []
		for (var i=3; i<squares.length; i++)
			squares[i].style.display = "none";
		for (var i=0; i<3; i++) {
			r = Math.floor(Math.random()*256);
			g = Math.floor(Math.random()*256);
			b = Math.floor(Math.random()*256);
			rgb.push('rgb(' + r + ', ' + g + ', ' + b + ')');
			squares[i].style.background = rgb[i];	
		}
		easy.classList.add("easy")
		hard.classList.remove("hard")
		randomColor = Math.floor(Math.random() * rgb.length);
		span.textContent = rgb[randomColor]		
}

hard.addEventListener("click", function() {	
	rgb = []
	for (var i=0; i<squares.length; i++) {
			r = Math.floor(Math.random()*256);
			g = Math.floor(Math.random()*256);
			b = Math.floor(Math.random()*256);
			rgb.push('rgb(' + r + ', ' + g + ', ' + b + ')');
			squares[i].style.background = rgb[i];	
			squares[i].style.display = "block"
		}
	hard.classList.add("hard")
	easy.classList.remove("easy")
	randomColor = Math.floor(Math.random() * rgb.length);
	span.textContent = rgb[randomColor]		
})

play.addEventListener("click", function() {
	rgb = []
	console.log("....")
	if (easy.classList.contains("easy")) {
		for (var i=0; i<3; i++) {
			r = Math.floor(Math.random()*256);
			g = Math.floor(Math.random()*256);
			b = Math.floor(Math.random()*256);
			rgb.push('rgb(' + r + ', ' + g + ', ' + b + ')');
			squares[i].style.background = rgb[i]
			console.log(rgb[i])	
		} 	
		randomColor = Math.floor(Math.random() * rgb.length);
		span.textContent = rgb[randomColor]
		play.textContent = "NEW COLORS"
		span1.textContent = ""
		h1.style.background = "rgb(10,100,125)"
	}
	else {
	for (var i=0; i<squares.length; i++) {
		r = Math.floor(Math.random()*256);
		g = Math.floor(Math.random()*256);
		b = Math.floor(Math.random()*256);
		rgb.push('rgb(' + r + ', ' + g + ', ' + b + ')');
		squares[i].style.background = rgb[i]	
		console.log(rgb[i])
	}
	count = 0;
	attempts.textContent = ""
	randomColor = Math.floor(Math.random() * rgb.length);
	span.textContent = rgb[randomColor]
	play.textContent = "NEW COLORS"
	span1.textContent = ""
	h1.style.background = "rgb(10,100,125)"
}
})

// play.addEventListener("mouseenter", function() {
// 	play.classList.add("hover")
// })

// play.addEventListener("mouseleave", function() {
// 	play.classList.remove("hover")
// })

function play_single_sound() {
		document.getElementById('audiotag1').play()
	}

function play_single_sounds() {
		document.getElementById('audiotag2').play()
	}
