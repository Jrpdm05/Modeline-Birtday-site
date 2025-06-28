// 💌 Birthday Letter Typing Effect
const letterText = `
For the girl who stole my heart,

Today is your day, and I hope this small world I made brings a smile to your beautiful face my love :).
Today is a special for you my love, as you go into adulthood and slowly grow out of your teenage years.
These past few months with you have been the best months in my life babygirl. With you in my life, I am the happiest man in the world.
Together, we smile, we hug each other, we joke aroud, and we have the time of our lives. I'm happy and blessed to have you in my life and I wish you a happy birthday! 
Although it's not much, I hope this letter of my affection and love goes straight to your heart.

With all my love, 
from your pooks,
John M :)
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

function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  const correctPassword = "modeline";

  if (password === correctPassword) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("letter-section").style.display = "block";
    document.getElementById("gallery-section").style.display = "block";
    typeWriter();
  } else {
    document.getElementById("loginError").textContent = "Incorrect password! Try again 💔";
  }
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
