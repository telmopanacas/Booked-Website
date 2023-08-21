const getCurrentTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ hours >= 12 ? 'PM' : 'AM' }`;

    return formattedTime;
}

export default getCurrentTime;