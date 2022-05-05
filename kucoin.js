// ==UserScript==
// @name         Kucoin Total Trade
// @namespace    https://github.com/suwardhana/kucoin-userscript
// @version      0.1
// @description  give a better idea how much a trade in USD
// @author       Suwardhana
// @match        https://www.kucoin.com/trade/*
// @icon         https://assets.staticimg.com/cms/media/7AV75b9jzr9S8H3eNuOuoqj8PwdUjaDQGKGczGqTS.png
// @run-at       document-end
// @noframes
// ==/UserScript==

(function () {
  'use strict';
  setInterval(function () {
    var elements = document.getElementsByClassName('dataItem__a9326');
    if (elements.length > 0) {
      for (var i = 0; i < elements.length; i++) {
        var alldivs = elements[i].getElementsByTagName("div");
        if (alldivs[6].innerText.includes('USDT')) {
          alldivs[9].innerText = parseFloat(alldivs[6].innerText.replace(/[^0-9\.]+/g, "")).toFixed(2);
        } else {
          var cleanPrice = alldivs[7].innerText.replace(/[^0-9\.]+/g, "");
          var avgPrice = alldivs[8].innerText.replace(/[^0-9\.]+/g, "");
          alldivs[9].innerText = (cleanPrice * avgPrice).toFixed(2);
        }
      }
    }

  }, 100);
})();