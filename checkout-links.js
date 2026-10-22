/* ============================================================
   LUXE DIGITAL — LIENS DE PAIEMENT RÉELS
   ============================================================
   Colle ici les liens de paiement (Payhip / Lemon Squeezy / Gumroad).
   Dès qu'un lien est rempli, les boutons "Acheter" du site
   redirigent automatiquement vers le paiement sécurisé.
   ============================================================ */
window.PRODUCT_LINKS = {
    protein:      { payhip: "https://payhip.com/b/K6czk", lemon: "", gumroad: "" },
    freelancer:   { payhip: "https://payhip.com/b/5K42c", lemon: "", gumroad: "" },
    automation:   { payhip: "https://payhip.com/b/xA9eR", lemon: "", gumroad: "" },
    agents:       { payhip: "https://payhip.com/b/V0fEL", lemon: "", gumroad: "" },
    ugc:          { payhip: "https://payhip.com/b/ShgH4", lemon: "", gumroad: "" },
    youtube:      { payhip: "https://payhip.com/b/jZ67T", lemon: "", gumroad: "" },
    prompt:       { payhip: "https://payhip.com/b/s2twL", lemon: "", gumroad: "" },
    shorts:       { payhip: "https://payhip.com/b/NmEIQ", lemon: "", gumroad: "" },
    microsaas:    { payhip: "https://payhip.com/b/8GfgK", lemon: "", gumroad: "" },
    cours:        { payhip: "https://payhip.com/b/gf83M", lemon: "", gumroad: "" },
    agence:       { payhip: "https://payhip.com/b/bxMY8", lemon: "", gumroad: "" },
    identite:     { payhip: "", lemon: "", gumroad: "" },
    email:        { payhip: "", lemon: "", gumroad: "" },
    finance:      { payhip: "https://payhip.com/b/AWwVo", lemon: "", gumroad: "" },
    productivite: { payhip: "", lemon: "", gumroad: "" },
    agentique:    { payhip: "", lemon: "", gumroad: "" },
    bundle:       { payhip: "", lemon: "", gumroad: "" }
};

// Renvoie le lien de paiement réel si configuré, sinon null
window.getPaymentLink = function (bookId) {
    const l = window.PRODUCT_LINKS[bookId];
    if (!l) return null;
    return l.payhip || l.lemon || l.gumroad || null;
};
