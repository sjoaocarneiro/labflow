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

        const cardId = await getCardId();

        const assinatura = signaturePad.toDataURL("image/png");

        const resultado = await uploadSignature(cardId, assinatura);

        console.log(resultado);

        alert("Assinatura enviada para o Trello!");

    } catch (erro) {

        console.error(erro);

        alert(erro.message);

    }

};
