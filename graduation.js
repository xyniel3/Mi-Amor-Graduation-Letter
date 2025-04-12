const message = `
For You Mi Amor,

Congratulations on your graduation!
I’m so proud of you and everything you’ve achieved.
You inspire me every single day, and I know you’ll do amazing things ahead.

This is just the beginning of a bright future, and I’m excited to see you shine.

Love always, Mon Tout
`;

const signature = '[Mon Tout]';

let i = 0;

function typeText() {
  if (i < message.length) {
    document.getElementById("letter").textContent += message.charAt(i);
    i++;
    setTimeout(typeText, 40);
  } else {
    document.getElementById("signature").textContent = signature;
  }
}

function startSurprise() {
  document.getElementById("letterBox").classList.remove("hidden");
  document.querySelector(".reveal-btn").style.display = "none";
  document.getElementById("bgMusic").play();
  launchConfetti();
  typeText();
}

// Simple confetti using canvas
function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let pieces = [];
  
  for (let i = 0; i < 100; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 40 + 10,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      tilt: Math.random() * 10 - 10
    });
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    
    update();
    requestAnimationFrame(draw);
  }
  
  function update() {
    pieces.forEach(p => {
      p.y += Math.cos(p.d) + 1 + p.r / 2;
      p.x += Math.sin(p.d);
      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
  }
  
  draw();
}