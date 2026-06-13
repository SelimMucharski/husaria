// game.js
async function checkAnswer(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input + "moje_sekretne_solenie"); // "Sól" utrudnia odgadnięcie
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  // Hash poprawnego hasła
  if (hashHex === "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8") {
    alert("Brawo! Idź do level2.html");
  }
}