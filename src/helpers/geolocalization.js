export default () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(resolve, reject);
        } else {
            reject();
        }
    });

}