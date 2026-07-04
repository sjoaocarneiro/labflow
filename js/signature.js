const canvas = document.getElementById("signature-pad");

canvas.width = canvas.offsetWidth;
canvas.height = 300;

const signaturePad = new SignaturePad(canvas);

document.getElementById("limpar").addEventListener("click", () => {
    signaturePad.clear();
});

document.getElementById("salvar").addEventListener("click", async () => {

    if (signaturePad.isEmpty()) {
        alert("Faça uma assinatura primeiro.");
        return;
    }

    const cardId = await getCardId();

    const assinatura = signaturePad.toDataURL("image/png");

    try {

        await uploadSignature(cardId, assinatura);

        alert("Assinatura anexada ao cartão!");

    } catch (e) {

        console.error(e);
        alert(e.message);

    }

});
