# Shared Email Layout Notes

These blocks are duplicated in every file under `emails/templates/`. Brevo requires each template to be fully self-contained HTML — do not paste partials separately.

**For non-coders:** use [`../drag-and-drop/README.md`](../drag-and-drop/README.md) instead. The drag-and-drop shell uses `header-block.html` and footer snippets with an editable middle section — no code edits per send.

## Structure

1. **Preheader** — hidden preview text (50–100 chars)
2. **Header** — wordmark + tagline + teal rule
3. **Eyebrow** — template category label (uppercase teal)
4. **Hero** — headline + intro paragraph
5. **Body blocks** — template-specific content
6. **CTA** — primary button (teal background)
7. **Footer** — social links, location, motto, copyright
8. **Compliance** — marketing: `{{ unsubscribe }}` + `{{ mirror }}`; transactional: reason line

## Header block

- Wordmark: coral `#D9654A`, Ephesis with Georgia italic fallback
- Tagline: teal at 80% opacity, Space Grotesk, 10px, uppercase, wide tracking
- 1px rule: `rgba(45, 191, 177, 0.22)`

## CTA button

```html
<a href="URL" style="display:inline-block;background-color:#2DBFB1;color:#0E1318;
  font-family:'Space Grotesk',Arial,sans-serif;font-size:12px;font-weight:500;
  letter-spacing:0.14em;text-transform:uppercase;text-decoration:none;
  padding:14px 28px;border-radius:4px;">
  Button label
</a>
```

## Detail card (surface block)

Used for inquiry summaries, event details, key facts:

- Background `#1B232C`
- Border `1px solid rgba(45, 191, 177, 0.22)`
- Padding `20px 24px`
- Label: Space Grotesk 10px uppercase teal
- Value: DM Sans 15px ink

## Marketing vs transactional

| Type | Templates | Compliance footer |
|------|-----------|-------------------|
| Marketing | newsletter, event, welcome | `{{ unsubscribe }}` and `{{ mirror }}` required |
| Transactional | contact-reply, speaking, press, partnership | "You received this because..." line only |

## Edit markers

Search for `<!-- EDIT:` in any template to find fields to customize per send.
