

export const getCars = async (page = 1) => {
    const offset = page * 20;
    const url = `https://api.api-ninjas.com/v1/cars?limit=${offset}&model=corolla`;
    const resp = await fetch(url, {
        headers: {
            'X-Api-Key': 'uUs1yCfQte60HVwKdEvR5tFRyMeBkNcXV9JxPceX'
        }
    });
    const data = await resp.json();
    return data;

}