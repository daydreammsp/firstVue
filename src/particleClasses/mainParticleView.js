import particle from './particle';
 export default function mainParticleView(){
    
        let canvas = document.getElementById("canvas");
        let context = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        // let p = new particle(width/2, height/3, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1);
        let numParticles = 200;
        //let particles = [new particle(width/2, height/3, 0, 0, 0)];
        let particles = [];
        for(let i = 0; i < numParticles; i++){
            particles.push(new particle(width * Math.random() , height * Math.random() , 0, Math.random(),Math.random() * -0.0001));
        }
        //Math.random() * Math.PI * 2
        update();
        canvas.addEventListener("click", getPosition);
        function getPosition(event){
            let rect = canvas.getBoundingClientRect(width, height);
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            // console.log(x,y)
            // particles.push( new particle(x,y, 0, 0, 0));
            if(particles.length > 1){
                for(let i=0; i<particles.length; i++){
                    if(i != particles.length - 1){
                        collision(particles[i], particles[particles.length - 1])
                    }
                    
                }
                    
                
                
            }
            
            update();
       }
       
        function update(){
            context.clearRect(0,0,width,height);
            for(let i = 0; i < particles.length; i++){
                let p = particles[i];
                
                
                p.update();
        
      
                context.beginPath();
                context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
                // context.fillStyle('white');
                context.fill();
                
            }

            
            
            requestAnimationFrame(update);
        }
        function collision(circle1, circle2) {
            
            var dx = circle1.position.getX() - circle2.position.getX();
            var dy = circle1.position.getX() - circle2.position.getX();
            
            var distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 10 + 10) {
                // collision detected!
                console.log('collision')
            }
        }
}