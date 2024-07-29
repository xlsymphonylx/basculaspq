function splitDate(dateToSplit) {
    // Split the date and time by the space character
    const [date, time] = dateToSplit ? dateToSplit.split(' ') : [null, null];

    return {
        DATE: date,
        TIME: time
    };
}
function combineDateTime(dateTimeObj) {
    const { DATE, TIME } = dateTimeObj;
    if (!DATE || !TIME) {
        return null;  // Return null or handle invalid input as needed
    }
    return `${DATE} ${TIME}`;
}
function formatDateToPortStandard(inputDate) {
    // Create a new Date object from the input
    const date = new Date(inputDate);

    // Define the components of the date
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format the date and time as dd/MM/yyyy HH24:mm:ss
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
}
function getFormattedDate() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = now.getFullYear();

    return `${day}/${month}/${year}`;
}

function getFormattedTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}
export { splitDate, formatDateToPortStandard, getFormattedDate, getFormattedTime, combineDateTime }