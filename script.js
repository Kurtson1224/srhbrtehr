let opened = false;
let i = 0;

const letterText = `Happy Valentine's Day BUB!
First of all, Sorry wala akong mabigay sayo ngayon na materyal na bagay para masabing espesyal
ang araw mo, tanging etong munting sulat ang akinhg maialay ko sayo.
Maraming salamat bub sa pag mamahal na kailanman hindi ako nakaramdam sayo ng pagtitipid, Salamat sa mga panahon na kapag akoy mahina
ikaw ang nagiging pundasyon upang manumbalik ang apoy sa makulimlim na klima, walang hanggang pasasalamat sayo sa pagsama sa akin sa mga librong sinusulat ko parin
hanggang ngayon. Tandaan mo sana na lagi lang ako nasa pahintayan ng Dyipni kung kakailanganin mo ako agad akong sasampa sayo at sasamahan sa lokasyon ng patutunguhan mo
HAPPY HAPPY HEARTS DAY, I LOVE YOU SO MUCH BUB.`;

const nextBtn = document.getElementById("nextButton");

nextBtn.addEventListener("click", () => {
  // Optional smooth fade
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "./Flores_NilverTI/FLORES.html";
  }, 800);
});

function openLetter() {
  if (opened) return;

  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  // Hide front text and button
  const frontText = document.querySelector(".envelope-text");
  if (frontText) {
    frontText.style.display = "none";
  }

  opened = true;
  typeWriter();
}

function typeWriter() {
  const txt = document.getElementById("typedText");

  if (i < letterText.length) {
    txt.innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  } else {
    const nextBtnContainer = document.getElementById("nextButtonContainer");
    nextBtnContainer.style.display = "block";
    nextBtn.classList.add("show");
  }
}
