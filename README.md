# Tokyo Sushi: Website (version 2)

A three-page website for Tokyo Sushi in Redlands, CA, written in plain HTML, CSS and JavaScript with no build step.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page: hero, Our Story, featured dishes |
| `menu.html` | Menu page with category tabs |
| `contact.html` | Contact & Location: address, phone, hours, map |
| `menu-data.js` | **All menu items and prices. This is the file to edit when the menu changes.** |
| `styles.css` | Colors, fonts and layout |
| `main.js` | Mobile hamburger menu, today's hours highlight |
| `menu.js` | Builds the menu tabs from `menu-data.js` |
| `images/` | Your food photos (see `images/PHOTOS.txt` for file names) |

## Preview it

Double-click `index.html`. It opens in your browser.

## Update the menu

Open `menu-data.js` in Notepad, make the change, and save. The instructions are at the top of the file.

## Change the hours, phone or address

These rarely change, so they're written straight into the pages. If they do change, update them in:
- `index.html`, `menu.html` and `contact.html`: the footer at the bottom of each page
- `index.html`: the "Come see us" section
- `contact.html`: the Address, Phone and Hours cards
- `index.html` and `contact.html`: the block near the top that starts with `"@type": "Restaurant"` (this is what Google reads)

## Live site

The site is published with GitHub Pages at **https://readtheterms.github.io/tokyo-sushi/**, from the `main` branch of the `readtheterms/tokyo-sushi` repository. This `version-2` folder is that repository.

**To update the live site** after editing files here, run these in this folder (or ask Claude to publish the changes):

```
git add -A
git commit -m "Describe the change"
git push
```

The live site updates a minute or two after the push.

**Custom domain:** to use your own domain (like `tokyosushiredlands.com`), add it on GitHub under **Settings → Pages → Custom domain** and follow GitHub's instructions for your domain registrar. Then replace `https://readtheterms.github.io/tokyo-sushi/` with the new address in the `"@type": "Restaurant"` block in `index.html` and `contact.html`.

Add the site's address to your Google Business Profile, Instagram bio and Yelp page so customers can find it.
