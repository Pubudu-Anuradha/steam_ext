# steam_workshop_extension_thing_idk

quick and dirty steam workshop item list to steamcmd commands

## prerequisites

- [Bun](https://bun.sh/)

## to run

### build

`bun build ./src/main.ts --outdir ./build --minify`

### build on modification

`bun run watch`

Then [load as a custom extension in a browser](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#installing). I've only tested in firefox.

## what it do tho?

after running, visit a steam workshop item list like [this](https://steamcommunity.com/sharedfiles/filedetails/?id=3220655751) and you should see an orange copy icon near each item's subscribe button that'll copy the [steamcmd command to download that item](https://developer.valvesoftware.com/wiki/SteamCMD) into your clipboard.

## TODO

- make it work in single workshop item pages?
