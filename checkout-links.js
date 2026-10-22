/* ============================================================
   LUXE DIGITAL — LIENS DE PAIEMENT RÉELS
   ============================================================
   Colle ici les liens de paiement de Lemon Squeezy / Gumroad.
   Exemple :
     protein: {
       lemon:   "https://luxedigital.lemonsqueezy.com/checkout/buy/xxxx",
       gumroad: "https://luxedigital.gumroad.com/l/protein"
     },
   Dès qu'un lien est rempli, les boutons "Acheter" du site
   redirigent automatiquement vers le paiement sécurisé.
   ============================================================ */
window.PRODUCT_LINKS = {
    protein:      { lemon: "", gumroad: "" },
    freelancer:   { lemon: "", gumroad: "" },
    automation:   { lemon: "", gumroad: "" },
    agents:       { lemon: "", gumroad: "" },
    ugc:          { lemon: "", gumroad: "" },
    youtube:      { lemon: "", gumroad: "" },
    prompt:       { lemon: "", gumroad: "" },
    shorts:       { lemon: "", gumroad: "" },
    microsaas:    { lemon: "", gumroad: "" },
    cours:        { lemon: "", gumroad: "" },
    agence:       { lemon: "", gumroad: "" },
    identite:     { lemon: "", gumroad: "" },
    email:        { lemon: "", gumroad: "" },
    finance:      { lemon: "", gumroad: "" },
    productivite: { lemon: "", gumroad: "" },
    agentique:    { lemon: "", gumroad: "" },
    bundle:       { lemon: "", gumroad: "" }
};

// Renvoie le lien de paiement réel si configuré, sinon null
window.getPaymentLink = function (bookId) {
    const l = window.PRODUCT_LINKS[bookId];
    if (!l) return null;
    return l.lemon || l.gumroad || null;
};
