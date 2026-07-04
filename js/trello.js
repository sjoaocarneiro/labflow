const t = window.TrelloPowerUp.iframe();

/**
 * Retorna as informações do cartão atual
 */
async function getCard() {
    return await t.card("id", "name");
}

/**
 * Retorna apenas o ID do cartão
 */
async function getCardId() {
    const card = await getCard();
    return card.id;
}
