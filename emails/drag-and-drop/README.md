# Brevo Drag & Drop Brand Shell

**Recommended workflow** for teams who need to edit email content without touching code.

The brand shell (header + footer) is pasted once into fixed **HTML blocks**. The email body in the middle is built with Brevo’s visual editor — click text, type, add images and buttons.

## How it works

```
┌─────────────────────────────┐
│  HEADER (HTML block)        │  ← paste once, rarely change
│  Wordmark + tagline + rule  │
├─────────────────────────────┤
│                             │
│  BODY (Drag & Drop)         │  ← edit freely every send
│  Text · Images · Buttons    │
│                             │
├─────────────────────────────┤
│  FOOTER (HTML block)        │  ← paste once, rarely change
│  Socials · motto · legal    │
└─────────────────────────────┘
```

## One-time setup (15–20 minutes)

Do this once. Save two master templates in Brevo.

### Step 1 — Create the template

1. Log in to [Brevo](https://www.brevo.com/)
2. Go to **Marketing → Templates → Create template → Email template**
3. Choose **Create from scratch → Drag and drop editor**
4. Name it **DrFoy — Shell (Marketing)** or **DrFoy — Shell (Transactional)**

### Step 2 — Set the email background

1. Click the email canvas background (outside any block)
2. In the right panel, set **Background color** to `#0E1318`
3. Set content width to **600px** if the option appears

### Step 3 — Add the header (HTML block)

1. From the left panel, drag an **HTML** block to the **top** of the email
2. Click the block → **Edit** (or double-click)
3. Open [`header-block.html`](header-block.html) from this folder
4. Select all (`Ctrl+A`), copy, paste into the Brevo HTML editor
5. Save the block

### Step 4 — Add the editable body (Drag & Drop)

Below the header, add normal blocks your team will edit each time:

| Block | Use for | Suggested styling |
|-------|---------|-------------------|
| **Text** | Eyebrow label (e.g. NEWSLETTER) | Color `#2DBFB1`, size 11px, ALL CAPS, center or left |
| **Text** | Headline | Color `#F2E8DC`, size 28–32px, Georgia or serif font |
| **Text** | Body copy | Color `#F2E8DC`, size 16px, Arial, line height ~1.6 |
| **Image** | Hero or inline photos | Use `https://drmacfoy.com/images/...` URLs |
| **Button** | CTA | Background `#2DBFB1`, text `#0E1318`, link to drmacfoy.com |
| **Text** | Sign-off | “Warm regards,” + Dr. Tochukwu Macfoy |

**Personalization:** In any text block, place the cursor and click the **{ } Add variable** icon to insert `{{ contact.FIRSTNAME }}` for greetings.

Use placeholder text in the master template (e.g. “Your headline here”) so editors know what to replace.

### Step 5 — Add the footer (HTML block)

1. Drag another **HTML** block to the **bottom**
2. Paste from one of:
   - **Marketing** (newsletters, events, welcome): [`footer-marketing.html`](footer-marketing.html) — includes unsubscribe
   - **Transactional** (replies, confirmations): [`footer-transactional.html`](footer-transactional.html) — no unsubscribe
3. Save the block

### Step 6 — Save the master template

1. Click **Save** (top right)
2. **Actions → Save as template** if prompted
3. Repeat steps 1–6 for the second shell (marketing vs transactional footer)

You now have two reusable shells. **You never need to edit the HTML blocks again** unless the brand changes.

---

## Every time you send an email

1. Go to **Marketing → Templates** (or **Campaigns → Create campaign**)
2. **Duplicate** `DrFoy — Shell (Marketing)` (do not edit the master)
3. Edit only the **middle section**:
   - Click text → type new headline and body
   - Swap images via the image block settings
   - Update button label and link
4. Set **Subject line** and **Preview text** at the campaign level
5. **Preview & test** → send to yourself
6. Send or schedule

No code. No HTML panel.

---

## Suggested starter layouts by email type

### Newsletter

1. Text — eyebrow: `NEWSLETTER`
2. Text — headline + intro (use `{{ contact.FIRSTNAME }}`)
3. Image — `https://drmacfoy.com/images/dr-foy.jpg`
4. Text — story 1 title + paragraph + link
5. Text — story 2 title + paragraph + link
6. Button — “Explore the full site” → `https://drmacfoy.com`
7. Text — sign-off

### Event announcement

1. Text — eyebrow: `ENERGIZE CENTRAL`
2. Text — event name as headline
3. Image — event artwork
4. Text — date, time, location
5. Text — bullet list of highlights
6. Button — “Get tickets” → ticket URL
7. Text — sign-off

### Welcome

1. Text — eyebrow: `WELCOME`
2. Text — “Glad you’re here, {{ contact.FIRSTNAME }}.”
3. Text — short intro + what to expect (3 bullets)
4. Button — “Connect on Instagram” → `https://instagram.com/drfoy`
5. Text — sign-off

### Contact reply / speaking / press / partnership

Use **DrFoy — Shell (Transactional)**. Same middle blocks — only the body text and optional detail card (use a Text block with bold labels) change per send.

---

## Brand quick reference

Full tokens: [`../brand-tokens.md`](../brand-tokens.md)

| Element | Value |
|---------|-------|
| Email background | `#0E1318` |
| Body text | `#F2E8DC` |
| Muted / secondary | `#93A8B8` |
| Accent / links / eyebrows | `#2DBFB1` |
| Wordmark | `#D9654A` |
| CTA button fill | `#2DBFB1` |
| CTA button text | `#0E1318` |
| Site | `https://drmacfoy.com` |

---

## Files in this folder

| File | Paste into |
|------|------------|
| `header-block.html` | Top HTML block (both shells) |
| `footer-marketing.html` | Bottom HTML block — newsletters, events, welcome |
| `footer-transactional.html` | Bottom HTML block — replies, confirmations, outreach |

---

## Full HTML templates (optional)

The seven files in [`../templates/`](../templates/) are still available if you need a fully coded email (e.g. developer or API sends). For day-to-day editing by non-coders, use this Drag & Drop shell instead.

## Brevo help links

- [Drag & Drop editor overview](https://help.brevo.com/hc/en-us/articles/360016831820-Overview-of-the-Drag-Drop-email-editor)
- [HTML content block](https://help.brevo.com/hc/en-us/articles/360016873319-About-sections-and-content-blocks)
- [Personalize with contact attributes](https://help.brevo.com/hc/en-us/articles/360001008200-Personalize-your-emails-with-contact-attributes)
