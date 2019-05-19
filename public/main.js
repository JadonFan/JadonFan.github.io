
function getScrollTop() {
  return window.pageYOffset ||  (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

function getTodayDate() {
	var fullDate = new Date();
	let year = fullDate.getFullYear();
	const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	let monthIndex = fullDate.getMonth();
	let monthString = month[monthIndex];
	let date = fullDate.getDate();

	var dateMessage;
	if (monthIndex == 3 && date == 9) {
		dateMessage = "<text style='color:white;'> <b> Happy Birthday to Myself! </b> </text>";
	} else {
		dateMessage = `<text style='color:white;'> <b> ${monthString} ${date}, ${year} </b> </text>`;
	}

	document.getElementById("todaydate").innerHTML = dateMessage;
	return;
}


function monthDiff(d1, d2) {
    var months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}


function getChildIndex(element) {
	var index = 0;
	while ((element = element.previousSibling) != null) {
		index++
	}

	return index;
}


function getFormData() {
    var url = window.location.href;
	var matchResult = url.match(new RegExp("https://(\..+){2,}\?feedback=\+(.+).*"));

	if (matchResult.length >= 3) { // the whole match counts as 1 captured group 
		/* */
	}
}


// with help from random strangers on the internet
/*
function copyAllText(element) {
	if (navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1) {
		(document.parentNode.getElementByClassName("filltextbox")[0]).select();
		document.execCommand("copy");
	} else {
	 	if (inElement.createTextRange) {
	    	var range = inElement.createTextRange();
	    	if (range && BodyLoaded==1) {
	      		range.execCommand('Copy');
	      	}
	 	} else {
	    	var flashcopier = 'flashcopier';
	    	if (!document.getElementById(flashcopier)) {
	     		var divholder = document.createElement('div');
	      		divholder.id = flashcopier;
	     		document.body.appendChild(divholder);
	     	}
	    document.getElementById(flashcopier).innerHTML = '';
	    var divinfo = '<embed src="_clipboard.swf" FlashVars="clipboard='+encodeURIComponent(inElement.value)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
	    document.getElementById(flashcopier).innerHTML = divinfo;
	 	}
 	}
} */