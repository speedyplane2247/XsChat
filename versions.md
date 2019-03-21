# Engine Versions
This is a list of all versions of post-6 XsChat
## Engine 6.2.0
6.2.0 introduces **REAL** AES-256 encryption, for actual security. It is currently in development, along with a nicer UI.
## Engine 6.2.1
6.2.1 is the version shipped with the encryption-less Developer Beta 6 due to internal issues.
## Engine 6.2.2
6.2.2 contains *actual* encryption, no base64 and other things.
Working on for LTS, not main focus.
## Engine 6.2.3
6.2.3 is a lot harder to get easily, without true encryption. This scrambles the text using XORs among other things. It has greater security than pre-6.2 excluding 6.2.2 & 6.2.0-lts builds.
### Why No Encryption?
True encryption would be very difficult to easily pull of, and it also discourages using this product for other larger uses that require security.
## Engine 6.3.0
6.3.0 is the 7.0.3 engine, and introduces a few minor changes, including error catching.
## Engine 6.3.1
6.3.1 is the 7.0.4 engine, with basic footer support.
## Engine 6.3.2
6.3.2. is the 7.1.x engine, with full header & footer support.
# Client Builds
Here is a list of clients (of note)
## 7.0.0 DB 2-5
These builds are after UI was finalized, and very much had huge code changes, until DB 6 reset the code. These builds are only *slightly* working encryption, so these are the most secure. In the only build with full working encryption, DB 3, doesn't have an attached UI, so navigation is difficult.
## 7.0.0 DB 6
DB 6 introduces the new scrambling algorithm.
## 7.0.0 RTM
7.0.0 introduces the new algorithm, a brand new (ish) UI, nicer buttons, and a couple other hot fixes.
## 7.0.1
7.0.1 dropped the 'key' box, as it is no longer used. (Residue from the betas)
## 7.0.2
7.0.2 added a check to see if it is the latest version or not. It doesn't auto-update, but it does warn the user that they are running an older build.
## 7.0.2-hf1
7.0.2 hot-fix 1 was released during the Release Candidate stages of 7.0.3, after it was found that it doesn't work on Firefox. (Due to the renaming of $enc.doTheFox to $enc.isRunningFireFox, but only on the checking side, making firefox prompts error out.
## 7.0.3
7.0.3 added error catching, as some invalid characters would have the button do nothing, so this addresses this. This is the last build to run in the legacy mode, as it doesn't contain a header / footer, or processing for that. Because of this, you can in most cases, view messages from 7.1x clients, but 7.0.4+ clients can't process 7.0.3's data.
## 7.0.4
7.0.4 adds basic footer support to allow sending recieving from 7.1. This was pre-7.1, and doesn't affect itself other than the '##LEGACY##' footer at the end. This is for internal uses only.
## 7.1.0 Betas
7.1.0 Developer Beta 1 has full footer / header support, with an example here:

```###BEGIN HEADER DATA ###
Client: XsChatV7@ENC
###END HEADER DATA###
###BEGIN USER MESSAGE###
Example data...
###END USER MESSAGE###
###BEGIN FOOTER MESSAGE###
Sender Information: XsChat V7.1.0
###END FOOTER MESSAGE###
##LEGACY##
```

Or, if you perfer the raw data (works on 7.x) 
```
I0JHTkhBRSBBQSMjQ2luOlhDYVZATgojRURIQUUgQUEjCiNCR05VRSBFU0cjI0VhcGVkdC4uIyNOIFNSTVNBRSMKI0JHTkZPRSBFU0cjI1NuZSBub210bzpYQ2EgNzEwIyNOIE9UUk1TQUUjCiNFQVkjIyNFSSBFRFJEVCAjCmxldCBzaHQ3RUMjI04gRURSRFQjIyMjRUkgU1JNU0FFIwp4bWwgYWEuCiNFRFVFIEVTRyMjIyNFSSBPVFJNU0FFIwplZHJJZnJhaW4gc2h0Vi4uCiNFREZPRSBFU0cjIyNMR0Mj
```

