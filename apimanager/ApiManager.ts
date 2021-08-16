
export const handlerFetch = async (endpoint: string) => {
    try {
        const response = await fetch(endpoint);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error)
    }

};