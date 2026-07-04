const t = window.TrelloPowerUp.iframe();

const canvas = document.getElementById("signature-pad");

canvas.width = canvas.offsetWidth;
canvas.height = 300;

const signaturePad = new SignaturePad(canvas);

document.getElementById("limpar").onclick = () => {
    signaturePad.clear();
};

document.getElementById("salvar").onclick = async () => {

    if (signaturePad.isEmpty()) {
        alert("Faça uma assinatura primeiro.");
        return;
    }

    try {

let cardId;

try {
    cardId = await getCardId();
    alert("2");
    alert(cardId);
} catch (e) {
    console.error(e);
    alert(e.message);
    return;
}


const assinatura = signaturePad.toDataURL("image/png");


const resultado = await uploadSignature(cardId, assinatura);

await t.closeModal();

    } catch (erro) {

        console.error(erro);

        alert(erro.message);

    }

};
