const letterText = `
For the girl who stole my heart,

Today is your day, and I hope this small world I made brings a smile to your beautiful face.
(Insert your full letter here...)

With all my love,
[Your Name]
`;

let i = 0;
const speed = 50;

function typeWriter() {
  if (i < letterText.length) {
    document.getElementById("typed-letter").innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
