const arrayContainsInt = (array, num) => {
    if (
        typeof array != "undefined" &&
        array != null &&
        array.length != null &&
        array.length > 0
    ) {
        return array.includes(num);
    }
    return false;
}
 
export default arrayContainsInt;