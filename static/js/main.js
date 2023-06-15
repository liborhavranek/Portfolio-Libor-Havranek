// JavaScript code for "Libor Havránek" typing effect
const text1 = "Libor Havránek"; // Text to be typed
const typingSpeed1 = 100; // Speed of typing (in milliseconds)
const delayTime1 = 1000; // Time delay before typing starts (in milliseconds)

function typeWriterEffect1() {
  const element = document.getElementById("typing-effect");
  const textLength = text1.length;
  let index = 0;

  function type() {
    if (index < textLength) {
      element.textContent += text1.charAt(index);
      index++;
      setTimeout(type, typingSpeed1);
    } else {
      // Call the "Junior" typing effect function
      typeWriterEffect3();

    }
  }

  setTimeout(type, delayTime1);
}

// Call the "Libor Havránek" typing effect function
typeWriterEffect1();


// JavaScript code for "Junior" typing effect
const text2 = "Junior "; // Text to be typed
const typingSpeed3 = 100; // Speed of typing (in milliseconds)
const delayTime3 = 1000; // Time delay before typing starts (in milliseconds)

function typeWriterEffect3() {
  const element = document.getElementById("junior-typing");
  const textLength = text2.length;
  let index = 0;

  function type() {
    if (index < textLength) {
      element.textContent += text2.charAt(index);
      index++;
      setTimeout(type, typingSpeed3);
    } else {
      // Call the alternating "Web developer" and "Web designer" typing effect function
      typeWriterEffect2();
    }
  }

  setTimeout(type, delayTime3);
}

// JavaScript code for repeating "Web developer" and "Web designer" typing effect
const typingSpeed2 = 100; // Speed of typing (in milliseconds)
const delayTime2 = 3000; // Time delay before typing starts (in milliseconds)
const jobTitles = ["Web developer", "Software engineer", "Web designer"];
let jobIndex = 0;

function typeWriterEffect2() {
  const element = document.getElementById("typing-effect-p");

  function deleteAndType() {
    setTimeout(function () {
      const remainingText = jobTitles[jobIndex];
      const deleteInterval = 100; // Speed of deleting (in milliseconds)
      let deleteIndex = element.textContent.length - 1;

      function deleteText() {
        if (deleteIndex >= 0) {
          element.textContent = element.textContent.slice(0, -1);
          deleteIndex--;
          setTimeout(deleteText, deleteInterval);
        } else {
          setTimeout(function () {
            const newText = remainingText;
            let newIndex = 0;

            function writeText() {
              if (newIndex < newText.length) {
                element.textContent += newText.charAt(newIndex);
                newIndex++;
                setTimeout(writeText, typingSpeed2);
              } else {
                // Repeat the repeating "Web developer" and "Web designer" typing effect
                setTimeout(function () {
                  jobIndex = (jobIndex + 1) % jobTitles.length;
                  deleteAndType();
                }, delayTime2);
              }
            }

            writeText();
          }, typingSpeed2);
        }
      }

      deleteText();
    }, typingSpeed2);
  }

  deleteAndType();
}