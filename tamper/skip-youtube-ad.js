// ==UserScript==
// @name         Skip youtube ad
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    var xPath = '//*[contains(@id, "skip-button")]';

    function getElementsByXpath(xpath, parent)
    {
        let results = [];
        let query = document.evaluate(xpath, parent || document,
                                      null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (let i = 0, length = query.snapshotLength; i < length; ++i) {
            results.push(query.snapshotItem(i));
        }
        return results;
    }

    setInterval(() => {
        if( getElementsByXpath(xPath).length >= 2 ) {
            getElementsByXpath(xPath)[1].click();
        }
    }, 1500);

})();