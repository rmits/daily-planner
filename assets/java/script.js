var eightButton = $('#8am-button');
var eightText = $('#8am-text');
var nineButton = $('#9am-button');
var nineText = $('#9am-text');
var tenButton = $('#10am-button');
var tenText = $('#10am-text');
var elevenButton = $('#11am-button');
var elevenText = $('#11am-text');
var twelveButton = $('#12pm-button');
var twelveText = $('#12pm-text');
var oneButton = $('#1pm-button');
var oneText = $('#1pm-text');
var twoButton = $('#2pm-button');
var twoText = $('#2pm-text');
var threeButton = $('#3pm-button');
var threeText = $('#3pm-text');

//current time using dayjs
var today = dayjs();
$('#time').text(today.format('MMM D, YYYY, h:mm'));

$(document).ready(function () {
    var eightText = $('#8am-text');
    var nineText = $('#9am-text');
    var tenText = $('#10am-text');
    var elevenText = $('#11am-text');
    var twelveText = $('#12pm-text');
    var oneText = $('#1pm-text');
    var twoText = $('#2pm-text');
    var threeText = $('#3pm-text');

    //these are here to call from local storage, and display that calue in the text box if there is a value in there
    var storedValue8 = localStorage.getItem('8am');
    if (storedValue8) {
        eightText.val(storedValue8);
    }

    var storedValue9 = localStorage.getItem('9am');
    if (storedValue9) {
        nineText.val(storedValue9);
    }
    var storedValue10 = localStorage.getItem('10am');
    if (storedValue10) {
        tenText.val(storedValue10);
    }

    var storedValue11 = localStorage.getItem('11am');
    if (storedValue11) {
        elevenText.val(storedValue11);
    }

    var storedValue12 = localStorage.getItem('12pm');
    if (storedValue12) {
        twelveText.val(storedValue12);
    }
    var storedValue1 = localStorage.getItem('1pm');
    if (storedValue1) {
        oneText.val(storedValue1);
    }

    var storedValue2 = localStorage.getItem('2pm');
    if (storedValue2) {
        twoText.val(storedValue2);
    }
    var storedValue3 = localStorage.getItem('3pm');
    if (storedValue3) {
        threeText.val(storedValue3);
    }
})


function changeBoxColor() {
    // Get the current hour using dayjs
    const currentHour = dayjs().hour();

    // Loop through the time cards
    for (let hour = 8; hour <= 15; hour++) {
        const timeCard = $(`#${hour}am`);
        const textCard = timeCard.children().eq(1);

        if (textCard.length) {
            if (hour < currentHour) {
                textCard.css('background-color', 'gray'); // Past time, change to gray
            } else if (hour === currentHour) {
                textCard.css('background-color', 'red'); // Current time, change to red
            } else {
                textCard.css('background-color', 'green'); // Future time, change to green
            }
        }
    }
};

//handle functions to set the local storage for each of the time text boxes
var handle8am = function (event) {
    event.preventDefault();

    var eightInput = eightText.val();

    if (!eightInput) {
        alert('You did not put anything!');
        return;
    } else {
        eightText.val(eightInput);
        localStorage.setItem('8am', eightInput);
    }
}



var handle9am = function (event) {
    event.preventDefault();

    var nineInput = nineText.val();

    if (!nineInput) {
        alert('You did not put anything!');
        return;
    } else {
        nineText.val(nineInput);
        localStorage.setItem('9am', nineInput);
    }
}

var handle10am = function (event) {
    event.preventDefault();

    var tenInput = tenText.val();

    if (!tenInput) {
        alert('You did not put anything!');
        return;
    } else {
        tenText.val(tenInput);
        localStorage.setItem('10am', tenInput);
    }
}

var handle11am = function (event) {
    event.preventDefault();

    var elevenInput = elevenText.val();

    if (!elevenInput) {
        alert('You did not put anything!');
        return;
    } else {
        elevenText.val(elevenInput);
        localStorage.setItem('11am', elevenInput);
    }
}

var handle12pm = function (event) {
    event.preventDefault();

    var twelveInput = twelveText.val();

    if (!twelveInput) {
        alert('You did not put anything!');
        return;
    } else {
        twelveText.val(twelveInput);
        localStorage.setItem('12am', twelveInput);
    }
}

var handle1pm = function (event) {
    event.preventDefault();

    var oneInput = oneText.val();

    if (!oneInput) {
        alert('You did not put anything!');
        return;
    } else {
        oneText.val(oneInput);
        localStorage.setItem('1pm', oneInput);
    }
}

var handle2pm = function (event) {
    event.preventDefault();

    var twoInput = twoText.val();

    if (!twoInput) {
        alert('You did not put anything!');
        return;
    } else {
        twoText.val(twoInput);
        localStorage.setItem('2pm', twoInput);
    }
}

var handle3pm = function (event) {
    event.preventDefault();

    var threeInput = threeText.val();

    if (!threeInput) {
        alert('You did not put anything!');
        return;
    } else {
        threeText.val(threeInput);
        localStorage.setItem('3pm', threeInput);
    }
}

eightButton.on('click', handle8am);
nineButton.on('click', handle9am);
tenButton.on('click', handle10am);
elevenButton.on('click', handle11am);
twelveButton.on('click', handle12pm);
oneButton.on('click', handle1pm);
twoButton.on('click', handle2pm);
threeButton.on('click', handle3pm);
changeBoxColor();




