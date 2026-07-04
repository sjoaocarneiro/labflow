async function uploadSignature(cardId, dataURL) {

    const blob = await (await fetch(dataURL)).blob();

    const formData = new FormData();

    formData.append("file", blob, "assinatura.png");

    return { formData };

}
