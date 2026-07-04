async function uploadSignature(cardId, dataURL) {

    const blob = await (await fetch(dataURL)).blob();

    const formData = new FormData();

    formData.append("file", blob, "assinatura.png");

    const response = await fetch(
        `https://api.trello.com/1/cards/${cardId}/attachments?key=${CONFIG.API_KEY}&token=${CONFIG.TOKEN}`,
        {
            method: "POST",
            body: formData
        }
    );

    if (!response.ok) {
        const erro = await response.text();
        throw new Error(erro);
    }

    return await response.json();
}
