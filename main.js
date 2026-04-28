console.log("JS loaded");
onload = () => {
  document.body.classList.remove("container");
};

const audio = document.querySelector("audio");

window.addEventListener("click", () => {
  console.log("User clicked");

  if (audio.paused) {
    audio
      .play()
      .then(() => console.log("Playing audio"))
      .catch((err) => console.log("Error:", err));
  } else {
    audio.pause();
    console.log("Audio paused");
  }
});
