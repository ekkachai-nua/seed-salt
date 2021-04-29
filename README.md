# seed-salt :salt:
After generated mnemonic phase, we all have worried about how to keep it safe and not lose it in the same time.
This function can add complexity to your original seed phase with hash of your password, so even this **salted seed** get by anyone they can't get your original seed without your password.


## How to use contribute
- Install browserify
```
npm i -g browserify
```
- Convert fixed helper to plain javascript
```
browserify bip39/helper.js --s helper > bip39/helper-bundle.js
```
- Test from browser console
``` helper.wordList```


---

### This is how we made it 👷‍♂️
- Convert your seed word into index (1-2048)
- SHA256 your password
- Combine hashed password with your seed index
- convert back your new index to **Salted Seed**
