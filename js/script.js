// Copyright (c) 2024 Mohammed EL-hayek All rights reserved
//
// Created by: Mohammed
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker support"
*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-01-Osamah-Hasan/sw.js", {
    scope: "/ICS2O-Unit-6-01-Osamah-Hasan/",
  })
}

window.onload = function () {
  // this calculates the volume of a sphere
  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get('r')

  // process
  const volume = (4 / 3) * Math.PI * radius ** 3
  const dimensions = 'Radius (r) = ' + radius + ' units'

  // output
  document.getElementById('radius').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'Volume (V) = ' + volume.toFixed(2) + ' units³'
}