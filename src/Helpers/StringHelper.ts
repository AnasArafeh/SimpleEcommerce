export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function stringHasNoValue(string) {
    return (string === undefined || string === null || string === "") ? "-" : string; 
}