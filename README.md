# ember-normalize

This is for adding [normalize.css][normalize] to your ember-cli app.

**You probably don't need this since it just adds the normalize.css
[bower][bower] package to your application for you.**

## Usage

### Dynamic Styles (SCSS, LESS, etc)

```css
// app/styles/app.scss

@import "bower_components/normalize.css/normalize";
```

### Static CSS

```javascript
// Brocfile.js

app.import('bower_components/normalize.css/normalize.css');
```

## Installation

If you're using ember-cli v0.2.3+:

```no-highlight
ember install ember-normalize
```

If you're using ember-cli v0.1.5 - v0.2.2:

```no-highlight
ember install:addon ember-normalize
```

If you're using an older version of ember-cli:

```no-highlight
npm install ember-normalize --save-dev
ember generate ember-normalize
```

[bower]: http://bower.io "bower"
[normalize]: https://github.com/necolas/normalize.css/ "normalize.css"
