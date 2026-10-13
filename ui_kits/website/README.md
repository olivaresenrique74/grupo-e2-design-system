# UI kit — Sitio corporativo Grupo E2

**Status: brand application, not a recreation.** No website code, Figma file or screenshots of grupoe2.com were provided — the only source was `Manual_de_Marca_Grupo_E2.docx` and the logo artwork. These screens apply the manual's palette, typography and logo rules to the surfaces a consultancy site needs. Treat them as a proposal to validate, not as the current live site.

## Screens
| Route | File | Contents |
|---|---|---|
| `home` | `page-home.jsx` | Navy hero with the mark as a watermark, proof strip, three service cards, four-phase method, navy testimonial + CTA panel |
| `servicios` | `page-services.jsx` | Navy page header, `Tabs` switching the three services, scope list, sticky summary card, sector tags |
| `contacto` | `page-contact.jsx` | Contact details column + full form (`Input`, `Select`, `Textarea`, `Checkbox`), success `Toast` |
| shell | `site-chrome.jsx` | Sticky glass header, navy-900 footer, `Section` / `SectionHead` layout helpers |
| shell | `site-app.jsx` | Client-side routing and page transition |

## Interaction
Header links and every CTA route between pages. On **Contacto**, tick the privacy checkbox and press *Enviar solicitud* for the success toast; submit without ticking it to see the error state on the email field.

## Components used
`Logo`, `Button`, `Icon`, `Card`, `Badge`, `Tag`, `Tabs`, `Input`, `Select`, `Textarea`, `Checkbox`, `Toast`. No primitive is re-implemented here.

## Placeholders
No brand photography was supplied. The kit uses navy panels and the mark as a watermark instead of photos. Swap in real imagery (cool-toned, no warm filters) where the brief calls for it.
