// MLG AIRHORN SOUND (text-to-speech simulation)
document.addEventListener('DOMContentLoaded', () => {
    // Add click effects to list items
    const listItems = document.querySelectorAll('.category li');
    
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle completion
            item.style.opacity = item.style.opacity === '0.5' ? '1' : '0.5';
            item.style.textDecoration = item.style.textDecoration === 'line-through' ? 'none' : 'line-through';
            
            // Create explosion effect on click
            createExplosion(item);
        });
    });
    
    // Random screen shake
    setInterval(() => {
        if (Math.random() > 0.7) {
            document.body.style.animation = 'none';
            setTimeout(() => {
                document.body.style.animation = 'screenShake 0.3s';
            }, 10);
        }
    }, 3000);
    
    // Add more particles dynamically
    setInterval(() => {
        createParticle();
    }, 500);
    
    // Random MLG effects
    setInterval(() => {
        if (Math.random() > 0.8) {
            createLensFlare();
        }
    }, 2000);
});

function createExplosion(element) {
    const explosion = document.createElement('div');
    const rect = element.getBoundingClientRect();
    
    explosion.style.position = 'fixed';
    explosion.style.left = rect.left + rect.width / 2 + 'px';
    explosion.style.top = rect.top + rect.height / 2 + 'px';
    explosion.style.width = '100px';
    explosion.style.height = '100px';
    explosion.style.borderRadius = '50%';
    explosion.style.background = 'radial-gradient(circle, rgba(255,255,0,0.9), rgba(255,100,0,0.7), transparent)';
    explosion.style.transform = 'translate(-50%, -50%) scale(0)';
    explosion.style.pointerEvents = 'none';
    explosion.style.zIndex = '9999';
    explosion.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    explosion.style.opacity = '1';
    
    document.body.appendChild(explosion);
    
    setTimeout(() => {
        explosion.style.transform = 'translate(-50%, -50%) scale(3)';
        explosion.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        explosion.remove();
    }, 500);
}

function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.borderRadius = '50%';
    particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '-10px';
    particle.style.pointerEvents = 'none';
    particle.style.boxShadow = '0 0 10px currentColor';
    particle.style.zIndex = '1';
    
    const animation = particle.animate([
        { transform: 'translateY(0) scale(0)', opacity: 0 },
        { transform: 'translateY(-100vh) scale(1)', opacity: 1 }
    ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'linear'
    });
    
    document.body.appendChild(particle);
    
    animation.onfinish = () => particle.remove();
}

function createLensFlare() {
    const flare = document.createElement('div');
    flare.style.position = 'fixed';
    flare.style.width = '200px';
    flare.style.height = '200px';
    flare.style.borderRadius = '50%';
    flare.style.background = `radial-gradient(circle, rgba(255,255,255,0.8), transparent)`;
    flare.style.left = Math.random() * 100 + '%';
    flare.style.top = Math.random() * 100 + '%';
    flare.style.pointerEvents = 'none';
    flare.style.filter = 'blur(20px)';
    flare.style.opacity = '0.6';
    flare.style.zIndex = '1';
    flare.style.transform = 'scale(0)';
    flare.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    
    document.body.appendChild(flare);
    
    setTimeout(() => {
        flare.style.transform = 'scale(2)';
        flare.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        flare.remove();
    }, 1000);
}

// Screen shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes screenShake {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        10% { transform: translate(-5px, -5px) rotate(-1deg); }
        20% { transform: translate(5px, 5px) rotate(1deg); }
        30% { transform: translate(-5px, 5px) rotate(-1deg); }
        40% { transform: translate(5px, -5px) rotate(1deg); }
        50% { transform: translate(-5px, -5px) rotate(-1deg); }
        60% { transform: translate(5px, 5px) rotate(1deg); }
        70% { transform: translate(-5px, 5px) rotate(-1deg); }
        80% { transform: translate(5px, -5px) rotate(1deg); }
        90% { transform: translate(-5px, -5px) rotate(-1deg); }
    }
`;
document.head.appendChild(style);

// MLG text console
console.log('%c🔥 MLG MODE ACTIVATED 🔥', 'font-size: 30px; color: #ff0000; text-shadow: 0 0 10px #00ff00; font-weight: bold;');
console.log('%cSUPER BOWL LX SHOPPING LIST ULTRA EXTREME EDITION', 'font-size: 20px; color: #00ffff; font-weight: bold;');
console.log('%c💥💥💥 LETS GOOOOOO 💥💥💥', 'font-size: 25px; color: #ffff00; text-shadow: 0 0 10px #ff00ff; font-weight: bold;');

// MLG AIRHORN FUNCTION
function triggerMLGMoment() {
    // Screen shake
    document.body.style.animation = 'screenShake 0.5s';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
    
    // Hit marker
    const hitMarker = document.querySelector('.hit-marker');
    hitMarker.classList.add('hit-marker-active');
    setTimeout(() => {
        hitMarker.classList.remove('hit-marker-active');
    }, 300);
    
    // Wombo combo text
    const wombo = document.querySelector('.wombo-combo');
    wombo.classList.add('wombo-active');
    setTimeout(() => {
        wombo.classList.remove('wombo-active');
    }, 1500);
    
    // Create multiple explosions
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createRandomExplosion();
        }, i * 100);
    }
    
    // Create extra doritos
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createDorito();
        }, i * 50);
    }
    
    // Lens flare burst
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createLensFlare();
        }, i * 200);
    }
    
    // Console airhorn
    console.log('%c🎺🎺🎺 AIRHORN!!! 🎺🎺🎺', 'font-size: 50px; color: #ff0000; font-weight: bold; text-shadow: 0 0 20px #ffff00;');
}

function createRandomExplosion() {
    const explosion = document.createElement('div');
    explosion.style.position = 'fixed';
    explosion.style.left = Math.random() * 100 + '%';
    explosion.style.top = Math.random() * 100 + '%';
    explosion.style.width = '200px';
    explosion.style.height = '200px';
    explosion.style.borderRadius = '50%';
    explosion.style.background = 'radial-gradient(circle, rgba(255,255,0,0.9), rgba(255,100,0,0.7), transparent)';
    explosion.style.transform = 'translate(-50%, -50%) scale(0)';
    explosion.style.pointerEvents = 'none';
    explosion.style.zIndex = '9998';
    explosion.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    explosion.style.opacity = '1';
    
    document.body.appendChild(explosion);
    
    setTimeout(() => {
        explosion.style.transform = 'translate(-50%, -50%) scale(2)';
        explosion.style.opacity = '0';
    }, 10);
    
    setTimeout(() => {
        explosion.remove();
    }, 500);
}

function createDorito() {
    const dorito = document.createElement('img');
    dorito.src = 'images/dorito.png';
    dorito.style.position = 'fixed';
    dorito.style.left = Math.random() * 100 + '%';
    dorito.style.top = '-100px';
    dorito.style.width = (60 + Math.random() * 60) + 'px';
    dorito.style.pointerEvents = 'none';
    dorito.style.zIndex = '5';
    dorito.style.filter = 'drop-shadow(0 0 15px #ff6600) drop-shadow(0 0 30px #ffaa00)';
    
    const animation = dorito.animate([
        { 
            transform: 'translateY(0) rotate(0deg)', 
            opacity: 1 
        },
        { 
            transform: `translateY(${window.innerHeight + 150}px) rotate(${720 + Math.random() * 360}deg)`, 
            opacity: 0.9 
        }
    ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'linear'
    });
    
    document.body.appendChild(dorito);
    
    animation.onfinish = () => dorito.remove();
}

