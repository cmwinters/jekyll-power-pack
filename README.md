# Jekyll Power Pack

## Contents

- [Install](#install)
- [License](#license)

## Install

### Dependencies

You'll need the following installed:

- Latest Jekyll (minimum v2.2.0): `$ gem install jekyll`
- Latest Rouge: `$ gem install rouge`
- Latest Sass: `$ gem install sass`
- Latest Grunt CLI: `$ npm install -g grunt-cli`
- [Node.js and npm](http://nodejs.org/download/)

Chances are you have all this already if you work on `github/github` or similar projects. If you have all those set up, now you can install the dependencies:

```bash
$ npm install
$ bower install
```

### Running locally

From the Terminal, start a local Jekyll server:

```bash
$ jekyll serve
```

Open a second Terminal tab to automatically recompile the Sass files, run autoprefixer, and update our [Primer stats file](#primer-stats):

```bash
$ grunt watch
```

Alternatively, you can manually run `grunt` and `jekyll serve` when needed.

### Publishing

Use the included Grunt task to generate and publish Primer's docs to the `gh-pages` branch.

```bash
$ grunt publish
```

This takes the `_site` directory, generates it's own Git repository there, and publishes the contents to the `gh-pages` branch here on GitHub. Changes are reflected in the hosted docs within a minute or so.



## License

Released under the [MIT license](LICENSE.md).
