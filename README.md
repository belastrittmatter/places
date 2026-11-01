# places

> Keep the places you love, from people you trust.

*Because the best places come from friends, not algorithms.*

[![license: AGPL-3.0](https://img.shields.io/badge/license-AGPL--3.0-blue)](LICENSE)
[![Expo 57](https://img.shields.io/badge/expo-57-black)](https://expo.dev)
[![issues](https://img.shields.io/github/issues/belastrittmatter/places)](https://github.com/belastrittmatter/places/issues)

places is an open-source app to save spots as you explore
and share them on a map with friends. Self-host it, or use
hosted places when live.

## Why places?

- **Save as you go.** Pin the good ones while traveling.
- **Plan from friends.** See pins for cities you've been to, from people you trust.
- **Own your go-to's.** Bring your own server, or use hosted. No ads. No tracking.

## Status

> Early development. Core save/share/sync is not built yet.
> Today: home, map, lists, profile shells. Follow along in
> [open issues](https://github.com/belastrittmatter/places/issues).

Breaking changes expected. Do not rely on local data yet.

## Run it

```sh
bun install
cp .env.example .env  # set GOOGLE_MAPS_API_KEY
bun run ios # or: bun run android
```

Needs Xcode and/or Android Studio. Uses native modules
(`expo-dev-client`, `expo-maps`), so use `ios` / `android`
— not a generic Expo Go client. Details in [CONTRIBUTING.md](CONTRIBUTING.md).

## Self-host vs hosted

- **BYO server:** full control over where your places live. Spec coming.
- **Hosted places:** zero-setup option when live.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). No coding needed to help:
report a spot flow, suggest a feature, translate.

## License

[AGPL-3.0-only](LICENSE) © 2026 Bela Strittmatter.
