//Instructions
//You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.
//It is known that all events are recorded in chronological order and two events can't occur in the same second.
//Return the minimum number of days during which the log is written.

//Solution
function checkLogs(log) {
    let days = 1;
    if (log.length > 1) {
        for (let i = 1; i < log.length; i++) {
            let date2 = log[i].split(':');
            let date = log[i-1].split(':');
            if (date2[0] < date[0]) {
                days += 1;
            } else if (date2[0] == date[0] && date2[1] < date[1]) {
                days += 1;
            } else if (date2[0] == date[0] && date2[1] == date[1] && date2[2] < date[2]) {
                days += 1;
            } else if (date2[0] == date[0] && date2[1] == date[1] && date2[2] == date[2]) {
                days += 1;
            }
        }
    } else if (log.length == 1) {
        days = 1;
    } else {
        days = 0;
    }
    return days;
}