export const getLocalStorage = (info) => {
    const objeto = JSON.parse(localStorage.getItem(`${info}`))
    return objeto;
};

export const setLocalStorage = () => {
    
}