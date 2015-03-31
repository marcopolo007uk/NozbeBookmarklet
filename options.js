$ = function() { return document.querySelector.apply( document, arguments ); };

$('#save').onclick = save;

function save() {
	key = $('#key').value;
	if( !key ) return alert('Please enter a valid Nozbe API key');
	chrome.runtime.sendMessage( { cmd: 'set_key', key: key });
	alert('Nozbe API key saved');
	close();
}