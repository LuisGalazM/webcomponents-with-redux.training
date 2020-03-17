export const validate = async (url) => { 
    let response, result;
    try {
        response = await fetch('http://localhost:8080/validations', {
            method: 'POST',
            body: url
        });
        result = await response.json();
    } catch (error) { 
        console.log('server not available', error);
        return;
    }
    const { ok, status } = result;
    console.log(`URL is valid? ${ok} with status ${status} `);
}