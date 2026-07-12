# Dr. Foy Email Templates for Brevo

Branded emails for [Brevo](https://www.brevo.com/), using **https://drmacfoy.com**.

## Recommended: Drag & Drop brand shell (no code to edit content)

**Best for teams who edit emails without developers.**

1. Build the master template once using **[`drag-and-drop/README.md`](drag-and-drop/README.md)**
2. Paste the header and footer HTML blocks (fixed brand)
3. Add text, images, and buttons in the middle via Brevo’s visual editor
4. **Duplicate** the shell for each send — edit only the middle section

```
emails/drag-and-drop/
  README.md                 ← start here
  header-block.html         ← paste into top HTML block
  footer-marketing.html     ← newsletters, events, welcome
  footer-transactional.html ← replies, confirmations, outreach
```

---

## Alternative: Full HTML templates (developer / one-off paste)

Seven self-contained HTML files in `emails/templates/` for Brevo’s **HTML custom code** editor. Use when you need the full design in code or for API-driven sends.

**Note:** Editing these later requires the HTML editor. Non-coders should use the Drag & Drop shell above instead.

### Quick start (HTML)

1. **Marketing → Templates → Create template → Email template**
2. **Create from scratch → HTML custom code**
3. Copy a file from `emails/templates/`, paste into Brevo
4. **Preview & test** → **Save as template**

Reference: [Brevo HTML custom code editor](https://help.brevo.com/hc/en-us/articles/4672127581074-Upload-an-HTML-file-to-design-your-emails-HTML-custom-code-editor)

### HTML templates

| File | Suggested Brevo name | Type | Use when |
|------|---------------------|------|----------|
| `01-contact-reply.html` | DrFoy — Contact Reply | Transactional | Replying to contact inquiries |
| `02-speaking-confirmation.html` | DrFoy — Speaking Confirmation | Transactional | Confirming speaking bookings |
| `03-newsletter.html` | DrFoy — Newsletter | Marketing | Periodic updates |
| `04-event-announcement.html` | DrFoy — Event Announcement | Marketing | Energize Fest, NEXT, events |
| `05-welcome.html` | DrFoy — Welcome | Marketing | New subscriber welcome |
| `06-press-outreach.html` | DrFoy — Press Outreach | Transactional | Media pitches |
| `07-partnership-follow-up.html` | DrFoy — Partnership Follow-up | Transactional | Advisory follow-ups |

Search for `<!-- EDIT:` in HTML files for fields to customize.

---

## Brevo merge tags

| Tag | Purpose |
|-----|---------|
| `{{ contact.FIRSTNAME }}` | Greeting (use **{ } Add variable** in Drag & Drop) |
| `{{ contact.LASTNAME }}` | Formal contexts |
| `{{ mirror }}` | View in browser (marketing) |
| `{{ unsubscribe }}` | Unsubscribe (marketing) |
| `{{ params.EVENT_NAME }}` etc. | HTML/API templates only |

Site URL: **https://drmacfoy.com**

---

## Marketing vs transactional

| | Marketing | Transactional |
|---|-----------|---------------|
| Footer file | `footer-marketing.html` | `footer-transactional.html` |
| Unsubscribe | Required | Not included |
| Examples | Newsletter, events, welcome | Contact reply, speaking, press |

---

## Test checklist

- [ ] Gmail (web + mobile)
- [ ] Outlook
- [ ] Dark background `#0E1318` renders correctly
- [ ] `{{ contact.FIRSTNAME }}` works in a test send
- [ ] Marketing footer shows unsubscribe
- [ ] Links go to https://drmacfoy.com and social URLs

## Brand reference

[`brand-tokens.md`](brand-tokens.md) · [`partials/layout-notes.md`](partials/layout-notes.md)

## File structure

```
emails/
  README.md
  brand-tokens.md
  drag-and-drop/          ← preferred for non-coders
    README.md
    header-block.html
    footer-marketing.html
    footer-transactional.html
  partials/
    layout-notes.md
  templates/              ← full HTML (developer option)
    01-contact-reply.html
    …
```
