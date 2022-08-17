export const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }
    return () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, options);
                }
            });
        } else {
            new Notification(title, options);
        }
    };
}