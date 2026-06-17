const COUNTRY_MAP = {
  FR: 'fr', GF: 'fr', PF: 'fr', TF: 'fr', GP: 'fr', MQ: 'fr',
  RE: 'fr', BL: 'fr', MF: 'fr', MC: 'fr', NC: 'fr', WF: 'fr',
  PM: 'fr', YT: 'fr',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  VE: 'es', CU: 'es', EC: 'es', GT: 'es', DO: 'es', BO: 'es',
  HN: 'es', PY: 'es', NI: 'es', CR: 'es', PA: 'es',
  UY: 'es', GQ: 'es',
  DE: 'de', AT: 'de', CH: 'de', LI: 'de', LU: 'de',
  IT: 'it', SM: 'it', VA: 'it',
  PT: 'pt', BR: 'pt', AO: 'pt', MZ: 'pt', CV: 'pt', GW: 'pt',
  TL: 'pt', ST: 'pt',
  NL: 'nl', BE: 'nl', SR: 'nl', AW: 'nl', CW: 'nl',
  PL: 'pl',
  SE: 'sv',
  RO: 'ro', MD: 'ro',
  GR: 'el', CY: 'el',
  RU: 'ru', BY: 'ru', KZ: 'ru', KG: 'ru', AM: 'ru',
  JP: 'ja',
  CN: 'zh-CN', TW: 'zh-CN', HK: 'zh-CN', MO: 'zh-CN', SG: 'zh-CN',
  IN: 'hi',
  PK: 'ur',
};

export async function onRequest(context) {
  const country = context.request.cf?.country || 'US';
  const locale = COUNTRY_MAP[country] || 'en';
  return new Response(JSON.stringify({ locale, country }), {
    headers: { 'content-type': 'application/json', 'cache-control': 'public, max-age=86400' },
  });
}
