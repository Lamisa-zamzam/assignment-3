//


function kilometerToMeter(num) {
    if (num <= 0) {
        return "You number is not valid, distance can't be negative."
    } else {
        var meter = num * 1000; //1 kiometer = 1000 meter.
        return meter;
    }
}


function budgetCalculator(clock, phone, laptop) {
    if (Math.round(clock) != clock || clock < 0 || Math.round(phone) != phone || phone < 0 || Math.round(laptop) != laptop || laptop < 0) {
        return "Your number is not valid. You have to give three values and none of them can be negative or a fraction. Please check again. ";
    } else {
        var clockCost = clock * 50;
        var phoneCost = phone * 100;
        var laptopCost = laptop * 500;
        var total = clockCost + phoneCost + laptopCost;
        return total;
    }
}


function hotelCost(days) {
    if (days < 0) {
        return "Your number of days is not valid. Days can't be negative. Please check again."
    } else if (Math.round(days) != days) {
        days = Math.round(days); // If the fraction portion of the input value is >= 0.5 , the bill of that day will be fully charged.
        if (days <= 10) {
            var totalCost = days * 100;
            return totalCost;
        } else if (days <= 20) {
            var firstTenDaysCost = 10 * 100;
            var remainingDays = days - 10;
            var costOfRemainingDays = remainingDays * 80;
            var totalCost = firstTenDaysCost + costOfRemainingDays;
            return totalCost;
        } else {
            var firstTenDaysCost = 10 * 100;
            var secondTenDaysCost = 10 * 80;
            var remainingDays = days - 20;
            var costOfRemainingDays = remainingDays * 50;
            var totalCost = firstTenDaysCost + secondTenDaysCost + costOfRemainingDays;
            return totalCost;
        }
    } else {
        if (days <= 10) {
            var totalCost = days * 100;
            return totalCost;
        } else if (days <= 20) {
            var firstTenDaysCost = 10 * 100;
            var remainingDays = days - 10;
            var costOfRemainingDays = remainingDays * 80;
            var totalCost = firstTenDaysCost + costOfRemainingDays;
            return totalCost;
        } else {
            var firstTenDaysCost = 10 * 100;
            var secondTenDaysCost = 10 * 80;
            var remainingDays = days - 20;
            var costOfRemainingDays = remainingDays * 50;
            var totalCost = firstTenDaysCost + secondTenDaysCost + costOfRemainingDays;
            return totalCost;
        }
    }
}


function megaFriends(arr) {
    var largestName = arr[0];
    if (arr.length === 0) {
        return "Your array is empty. Please check again." //in case array is == [].
    } else {
        for (var i = 0; i < arr.length; i++) {
            var friendsName = arr[i];
            if (friendsName.length > largestName.length) {
                largestName = friendsName;
            }
        }
    }
    return largestName;
}