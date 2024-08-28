export const handleAuthError = (error, router) => {
    if (error.response && error.response.status === 401) {
        console.error("Authentication error:", error.response.data.message);
        router.push({ name: 'login' });
    } else if (error.response) {
        console.error("Server error:", error.response.data.message);
    } else {
        console.error("An error occurred:", error.message);
    }
};
