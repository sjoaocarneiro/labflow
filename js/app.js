const t = window.TrelloPowerUp.iframe();

document
    .getElementById("btnAssinar")
    .addEventListener("click", () => {

        t.modal({
            title: "Assinatura",
            url: "./signature.html",
            fullscreen: true
        });

    });
