function splitDate(dateToSplit) {
    // Split the date and time by the space character
    const [date, time] = dateToSplit ? dateToSplit.split(' ') : [null, null];

    return {
        DATE: date,
        TIME: time
    };
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
    console.log(formattedDateTime);
    return formattedDateTime;
}

export { splitDate, formatDateToPortStandard }