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

        alert("1");

const cardId = await getCardId();

alert("2");

const assinatura = signaturePad.toDataURL("image/png");

alert("3");

const resultado = await uploadSignature(cardId, assinatura);

alert("4");

    } catch (erro) {

        console.error(erro);

        alert(erro.message);

    }

};
