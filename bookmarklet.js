chrome.runtime.sendMessage( { cmd: 'get_key' }, function(key){
	nozbewww	  = document.createElement('SCRIPT');
	nozbewww.type = 'text/javascript';
	nozbewww.id   = 'nozbejs';
	nozbewww.src  = 'https://secure.nozbe.com/nozbe/nozbe.bookmarklet.js?key=' + key;
	document.getElementsByTagName('head')[0].appendChild(nozbewww);
});