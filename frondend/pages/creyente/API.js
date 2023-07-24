const urlGet = "http://localhost:2000/creyente";
const urlPost = "http://localhost:2000/creyente";


export const getCiclistas = async () => {
    try {
        const extract = await fetch(urlGet);
        const datos = await extract.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const postCiclistas = async (objeto) => {
    try {
        await fetch(urlPost, {
            method: "POST",
            body: JSON.stringify(objeto),
            headers: {
                "Content-Type":"application/json"
            }
        })
        window.location = "Ciclistas.html"
    } catch (error) {
        console.log(error);
    }
}
