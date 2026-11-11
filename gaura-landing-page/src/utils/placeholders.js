const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8000";

const normalize = (key = "") => key.toLowerCase().replace(/[^a-z0-9]/g, "");

// Friendly aliases -> app config field
const ALIASES = {
  name: "appName",
  companyname: "appName",
  academyname: "appName",
  businessname: "appName",
  sitename: "appName",
  websitename: "appName",
  emailaddress: "email",
  contactemail: "email",
  supportemail: "email",
  phone: "phoneNumber",
  contactnumber: "phoneNumber",
  mobile: "phoneNumber",
  mobilenumber: "phoneNumber",
  whatsapp: "whatsAppLink",
  facebook: "facebookLink",
  instagram: "instagramLink",
  twitter: "twitterLink",
  youtube: "youtubeLink",
  linkedin: "linkedinLink",
};

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Fetch the public app config (null on failure). */
export async function fetchAppConfig() {
  try {
    const res = await fetch(`${baseUrl}/api/v1/app-config/public`, {
      cache: "no-store",
    });
    const result = await res.json();
    return res.ok && result.data ? result.data : null;
  } catch {
    return null;
  }
}

/**
 * Replace {{placeholder}} tokens (e.g. {{appName}}, {{email}}, {{phone}},
 * {{address}}) with values from the app config. Matching ignores case,
 * spaces, underscores and dashes. Unknown tokens are left untouched.
 */
export function applyPlaceholders(html = "", config) {
  if (!html || !config) return html;

  const values = {};
  for (const [key, value] of Object.entries(config)) {
    if (typeof value === "string" && value.trim()) {
      values[normalize(key)] = value;
    }
  }
  const addresses = Array.isArray(config.companyAddress)
    ? config.companyAddress.map((a) => a?.address).filter(Boolean)
    : [];
  if (addresses.length) {
    values.address = addresses[0];
    values.companyaddress = addresses[0];
  }

  return html.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (match, rawKey) => {
    const key = normalize(rawKey);
    const resolved = values[key] ?? values[normalize(ALIASES[key] || "")];
    return resolved ? escapeHtml(resolved) : match;
  });
}
