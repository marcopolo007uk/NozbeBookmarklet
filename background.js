chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "bookmarklet.js"})
});

chrome.runtime.onMessage.addListener(function(msg, sendr, reply) {
	switch(msg.cmd) {
		case 'get_key': reply(localStorage._key); return true;
		case 'set_key': localStorage._key = msg.key;
	}
});

chrome.runtime.onInstalled.addListener( function() {
	console.log( 'onStartup');
	if( !localStorage._key ) chrome.tabs.create( { url: chrome.extension.getURL('options.html') } );
});
