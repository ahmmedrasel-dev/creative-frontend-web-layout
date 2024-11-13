$(function () {
  "use strict";

  //======Nice select js=======
  $(".language_select").niceSelect();

  const $text = $(".watch_video");
  $text.html(
    $text
      .text()
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 12.8}deg)">${char}</span>`
      )
      .join("")
  );

  // MARQUEE ANIMATION JS
  $(".marquee_animi").marquee({
    gap: 100,
    speed: 70,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    pauseOnHover: true,
  });

  //*=====venobox js=====
  $(".venobox").venobox({});

  const $experience = $(".experience");
  $experience.html(
    $experience
      .text()
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
      )
      .join("")
  );

  // COUNTER JS
  $(".count").countUp();
});
