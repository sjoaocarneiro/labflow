const canvas = document.getElementById("signature-pad");

canvas.width = canvas.offsetWidth;
canvas.height = 301;

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
    
    
} catch (e) {
    console.error(e);
    
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
