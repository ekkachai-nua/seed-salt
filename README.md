# seed-salt :salt:
After generated mnemonic phase, we all have worried about how to keep it safe and not lose it in the same time.
This function can add complexity to your original seed phase with hash of your password, so even this **salted seed** get by anyone they can't get your original seed without your password.

## How to use
### Salt you seed 🔒
- input your mnemonic word (12, 15, 18, 21, 24) to **Original seed**
- input your password - do not have any constraint
- click on **salt** button
- check result at **Salted Seed**
- now you can save it safely 😎

### Unsalt you saved key 🔓
- input your salted mnemonic word that you saved to **Original seed**
- input your password - make sure it's the same when you salted
- click on **unsalt** button
- check result at **Original Seed**
- now you can import it to recovery wallet 😌

---
## How to contribute
- Install browserify
```
npm i -g browserify
```
- Update salted logic in "src/helper.js"
- Convert fixed helper to plain javascript
```
browserify src/helper.js --s helper > helper-bundle.js
```
- Test from browser console
``` 
helper.wordList
```


### This is how we made it 👷‍♂️
- Convert your seed word into index (1-2048)
- SHA256 your password
- Combine hashed password with your seed index
- convert back your new index to **Salted Seed**
