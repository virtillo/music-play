export function formatDate(date) {
    const day = parseInt(date.substring(8, 10));
    const month = parseInt(date.substring(5, 7) - 1);
    const year = parseInt(date.substring(0, 4));
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    return `${monthNames[month]} ${day}, ${year}`;
}