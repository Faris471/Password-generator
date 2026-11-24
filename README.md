# 🔐 Password Generator

Generates two random passwords at a time and tells you how strong they are.

**🔗 Live demo:** https://faris471.github.io/Password-generator/

## Features

- Two random passwords per click
- Length slider (4–14 characters)
- Uses uppercase and lowercase letters, numbers and symbols
- Strength checker that tells you what's missing, for example "Strong but missing capital letters"

## Built with

- HTML5 & CSS3 (Google Fonts)
- Vanilla JavaScript

## Run it locally

```bash
git clone https://github.com/Faris471/Password-generator.git
```

Then open `index.html` in your browser.

## What I learned

- Generating random values with `Math.random()`
- Reading input from a range slider
- Loops and conditionals for the strength checker
- Updating the DOM with `textContent`

## Next steps

- [ ] Click a password to copy it to the clipboard
- [ ] Toggles to include or exclude numbers and symbols
- [ ] Use `crypto.getRandomValues()` instead of `Math.random()` for truly secure passwords
