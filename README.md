# seed-salt :salt:
After generated mnemonic phase, we all have worried about how to keep it safe and not lose it in the same time.
This function can add complexity to your original seed phase with hash of your password, so even this **salted seed** get by anyone they can't get your original seed without your password.


## How to use (Salt) :lock:
```
const {salt} = require("./helper");

// Update your seed phase here
let seed = "reunion mixed cruise idle observe gesture embody exile inherit person abandon zoo";

// Update your password to add salt to your seed
let pwd = "P@1sw9rd";

// Now you can keep your salted seed safe
console.log(salt(seed, pwd));
```

## How to use (Unsalt) :unlock:
```
const {unsalt} = require("./helper");

// Update your salted seed phase here
let saltedSeed = "sample news donor ivory page half excuse fiber kit question art arrow";

// Update your password !!! This must be the same when you salt your seed phase
let pwd = "P@1sw9rd";

// Now you can keep your salted seed safe
console.log(unsalt(saltedSeed, pwd));
```

---

### This is how we made it 👷‍♂️
- Convert your seed word into index (1-2048)
- SHA256 your password
- Combine hashed password with your seed index
- convert back your new index to **Salted Seed**
