export const LinkNavigation = (url: string): void => {
    if (typeof window !== "undefined") {
        const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
        window.open(formattedUrl, "_blank");
    }
}
