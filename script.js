"use strict";

const min = document.getElementById("minutes");
const hrs = document.getElementById("hours");
const scs = document.getElementById("seconds");

const timer = setInterval(() => {
  const date = new Date();

  let dateHours = date.getHours();
  let dateMinutes = date.getMinutes();
  let dateSeconds = date.getSeconds();

  if (dateHours < 10) dateHours = "0" + dateHours;
  if (dateMinutes < 10) dateMinutes = "0" + dateMinutes;
  if (dateSeconds < 10) dateSeconds = "0" + dateSeconds;

  hrs.textContent = dateHours;
  min.textContent = dateMinutes;
  scs.textContent = dateSeconds;
}, 1000);
