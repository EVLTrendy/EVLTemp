const bubbleBackgrounds = document.querySelectorAll('.bubble-background');

bubbleBackgrounds.forEach((bubbleBackground) => {
  for (let i = 0; i < 4; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.width = `${Math.floor(Math.random() * 100) + 50}px`;
    bubble.style.height = `${Math.floor(Math.random() * 100) + 50}px`;
    bubble.style.top = `${Math.floor(Math.random() * 80)}vh`;
    bubble.style.left = `${Math.floor(Math.random() * 80)}vw`;
    bubbleBackground.appendChild(bubble);

    const xMovement = Math.random() * 2 - 1; 
    const yMovement = Math.random() * 2 - 1; 

    bubble.style.animation = `moveBubble 3s ease-in-out infinite`;
    bubble.style.transform = `translate(${xMovement * 100}px, ${yMovement * 100}px)`;
  }
});

