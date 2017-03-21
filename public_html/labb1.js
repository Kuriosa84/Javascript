window.addEventListener('load', function() {
    document.getElementById("button").addEventListener('click', getAge);
});

//Övning 10 och 11
function getAge() {
    var list = document.getElementById("list");
    var li = document.createElement("li");
    var input = document.getElementById("input");
    li.innerHTML = age(input.value);
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Ta bort";
    removeButton.addEventListener('click', function() {
        list.removeChild(li);
    });
    li.appendChild(removeButton);
    list.appendChild(li);
}

function birthday(ssn) {
    var month = getMonth(ssn);
    var day = getDay(ssn);
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    if(currentMonth === month && currentDay === day) {
        return true;
    }
    return false;
}

function age(ssn) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var result = Math.abs(currentYear - getYear(ssn)) % 100;
    if(!hasHadBirthdayThisYear(ssn)) {
        result -= 1;
        if(result <= 0) {
            result = 99;
        }
    }
    return result;
}

function over18(persons) {
    return persons.filter( function(person) { return isValidNumber(person.ssn) && age(person.ssn) >= 18; } );
}

function hasHadBirthdayThisYear(ssn) {
    var month = getMonth(ssn);
    var day = getDay(ssn);
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    
    if (currentMonth > month) {
        return true;
    } else if (currentMonth < month) {
        return false;
    } else {
        if(currentDay >= day) {
            return true;
        } else {
            return false;
        }
    }
}

function isValidNumber(ssn) {
    var month = getMonth(ssn);
    var day = getDay(ssn);
    var nrArray = ssn.split('');
    var validationSum = 0;
    
    if( !/\d{10}/.test(ssn) ) {
        return false;
    }
    if(month > 12 || month < 1) {
        return false;
    }
    if(day < 1) {
        return false;
    }
    switch(month) {
        case 2: if( (isLeapYear(ssn) && day > 29) || (!isLeapYear(ssn) && day > 28) ) {
            return false;
        }
        break;
        case 4: case 6: case 9: case 11: if(day > 30) {
            return false;
        }
        break;
        default: if(day > 31) {
            return false;
        }
    }
    
    for(var i=0; i<nrArray.length; i++) {
        if(i % 2 === 0) {
            validationSum += digitSum(2 * Number(nrArray[i]));
        } else {
            validationSum += Number(nrArray[i]);
        }
    }
    return (validationSum % 10 === 0);
}

//För heltal från 0 upp till 99
function digitSum(nr) {
    return Math.floor(nr / 10) + (nr % 10);
}

//Gäller efter år 1900 och innan år 2100...
function isLeapYear(ssn) {
    return Number(ssn.substring(0,2)) % 4 === 0;
}

function getYear(ssn) {
    return Number(ssn.substring(0,2));
}

function getMonth(ssn) {
    return Number(ssn.substring(2,4));
}

function getDay(ssn) {
    return Number(ssn.substring(4,6));
}