# ui-test-seed

Template for UI test automation project, using:

* CucumberJS
* Selenium 3

## Prerequisites

* [Node.js LTS (10+)](https://nodejs.org/en/) - Choose the LTS version

* [Visual Studio Code](https://code.visualstudio.com/docs/?dv=win64user)

* GitHub account and [Git client](https://git-scm.com/downloads) configured with your account

* Clone this repository

* -Open package.json and check if the `chromedriver` dependency's `major` version matches the `major` version of chrome installed `on your computer` (Chrome options in top right / Help / About Google Chrome) or open chrome://settings/help<br>
-If it doesn't match, change only the `major` part to your installed version in the package.json<br><br>
-Example:<br>
** original in package.json is `"chromedriver": "^86.0.0"`<br>
** installed version on your computer is `87.0.4240.193`<br>
** change package.json to `"chromedriver": "^87.0.0"`<br>


## Install

```
$> npm install
```

