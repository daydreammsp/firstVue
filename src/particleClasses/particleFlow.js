import particle from './particle';
export default function particleFlow(){

    let canvas = document.getElementById("canvas");
	let context = canvas.getContext("2d");
	let	width = canvas.width = window.innerWidth;
	let	height = canvas.height = window.innerHeight;
	let	fl = 300;
	let	cards = [];
	let	numCards = 400;
	let	centerZ = 2000;
	let	radius = 1000;
	let	baseAngle = 0;
	let	rotationSpeed = 0.01;


	for(let i = 0; i < numCards; i += 1) {
		let card = {
			angle: 0.2 * i,
			y: 2000 - 4000 / numCards * i,
			img: document.createElement("img")
		};
		card.x = Math.cos(card.angle + baseAngle) * radius;
		card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
		cards.push(card);
	}

	context.translate(width / 2, height / 2);
	context.font = "200px Arial";

	document.body.addEventListener("mousemove", function(event) {
		rotationSpeed = (event.clientX - width / 2) * 0.00005;
		ypos = (event.clientY - height / 2) * 2;
	});
	canvas.addEventListener("click", getPosition);
        function getPosition(event){
            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            // console.log(x,y)
            particles.push( new particle(x,y, 0, 0, 0));
            if(particles.length > 1){
                for(let i=0; i<particles.length; i++){
                    if(i != particles.length - 1){
                        collision(particles[i], particles[particles.length - 1])
                    }
                    
				}
			}
		}
                    
                
                
            
	update();

	function update() {
		baseAngle += rotationSpeed;
		cards.sort(zsort);
		context.clearRect(-width / 2, -height / 2, width, height);
		for(let i = 0; i < numCards; i += 1) {
			let card = cards[i],
				perspective = fl / (fl + card.z);

			context.save();
			context.scale(perspective, perspective);
			context.translate(card.x, card.y);

			context.beginPath();
			context.arc(0, 0, 40, 0, Math.PI * 2, false);
			context.fill();

			context.restore();

			card.x = Math.cos(card.angle + baseAngle) * radius;
			card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
		}
		requestAnimationFrame(update);
	}

	function zsort(cardA, cardB) {
		return cardB.z - cardA.z;
	}

	function collision(circle1, circle2) {
            
		var dx = circle1.position.getX() - circle2.position.getX();
		var dy = circle1.position.getX() - circle2.position.getX();
		
		var distance = Math.sqrt(dx * dx + dy * dy);
		
		if (distance < 10 + 10) {
			// collision detected!
			alert('collision')
		}
	}
}
