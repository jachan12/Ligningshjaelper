// Hver side er nu et array af led: [{factor, xPow}]
let leftTerms = window.leftTerms;
let rightTerms = window.rightTerms;
let sqrtSolutions = window.sqrtSolutions;

function updateEquationDisplay() {
  window.updateEquationDisplay();
}

function setCustomEquation(eqObj) {
  window.setCustomEquation(eqObj);
}

function generateEquation(level) {
  window.generateEquation(level);
}

function activateCustomEqMode() {
  window.activateCustomEqMode();
}

function updateLevelDisplay() {
  window.updateLevelDisplay();
}

function showCustomEqInput(show) {
  window.showCustomEqInput(show);
}

document.addEventListener("DOMContentLoaded", function () {
  // Tilføj event listeners til de statiske level-knapper
  const levelBtns = document.querySelectorAll("#levelBtns .level-btn");
  levelBtns.forEach((btn, idx) => {
    if (idx === 0) {
      btn.addEventListener("click", function () {
        activateCustomEqMode();
      });
    } else {
      btn.addEventListener("click", function () {
        generateEquation(idx);
      });
    }
  });

  generateEquation(1);

  const input = document.getElementById("operationStep");
  if (input) {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        window.applyStep();
      }
    });
  }

  const applyBtn = document.getElementById("applyStepBtn");
  if (applyBtn) {
    applyBtn.addEventListener("click", function () {
      window.applyStep();
    });
  }

  const nextBtn = document.getElementById("nextEquationBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      generateEquation(window.currentLevel);
    });
  }

  const customEqBtn = document.getElementById("customEqBtn");
  if (customEqBtn) {
    customEqBtn.addEventListener("click", function () {
      activateCustomEqMode();
    });
  }

  const customEqOkBtn = document.getElementById("customEqOkBtn");
  if (customEqOkBtn) {
    customEqOkBtn.addEventListener("click", function () {
      const input = document.getElementById("customEqInput").value.trim();
      if (!input) {
        alert("Indtast en ligning, fx 2x-3=23-x");
        return;
      }
      try {
        const eqObj = window.parseUserEquation(input);
        setCustomEquation(eqObj);
      } catch (e) {
        alert("Kunne ikke forstå ligningen: " + e.message);
      }
    });
  }

  const customEqInput = document.getElementById("customEqInput");
  if (customEqInput) {
    customEqInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        customEqOkBtn.click();
      }
    });
  }
});
