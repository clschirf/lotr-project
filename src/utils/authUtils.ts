export const getLotrApiToken = (): string | null => {
    return window.localStorage.getItem('lotr-api-key');
}