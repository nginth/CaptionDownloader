// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 **/

function downloadFiles(url){
  chrome.downloads.download({
    url: url,
    filename: "index.html"
  })
}


function getUrl(callback){
  chrome.tabs.getSelected(null, function(tab){
    var tablink = tab.url;
    callback(tablink);  
  })
}


document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('dlButton').addEventListener('click', getUrl(downloadFiles));
});
