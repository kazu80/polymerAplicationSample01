# My Polymer Starter Kit

This template is contain [Polymer Starter Kit](https://github.com/Polymer/polymer-starter-kit) and customise myself.
I customised it because I want use sass in global style file.

### How was customised

Some npm packages installed the following.

```
$ npm i -D webpack webpack-cli sass-loader node-sass style-loader css-loader url-loader
```

And created webpack.config.js.

* `entry` - Sated `src/static/js` directory's `entry.js`.
* `output's path` - Sated `src/static/js` directory.
* `output's filename` - Sated `main.js`.
* `modules` - Sated rule for translate sass to css and combine image data.

### npm script

Add original script commands.

* `serve` - This command is add open browser option to `polymer serve` original command.
* `webpack` - This command is build webpack and watched change.
* `build` - This command is add webpack build command before `polymer build` original command.

### How to use when developing

Run `webpack` command and `serve` command.
