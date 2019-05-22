# No longer maintained
This project is no longer maintained. For an up-to-date material design project, please use [Ember Paper](https://github.com/miguelcobain/ember-paper).

---

# Ember-material-design

The **Ember Material Design** project is an implementation of Material Design in EmberJS. This project 
attempts to provide a set of reusable, well-tested and accessible UI components based on the Material Design system.

This project is as close to a reference implementation of [Angular Material](http://material.angularjs.org) as 
I could make it. Most of the credit for this work belongs to that team.

Note that this addon is under a lot of active development. I try to keep breaking changes to a minimum, but no guarantees
until development slows down and stabilizes and a 1.0 version is released.


## Demo

Visit [Demo Page](http://mike1234.com/ember-material-design) to view the components in action.


## Installation

Install the ember-cli addon into project

```
$ ember install ember-material-design
```

This project uses SASS for compiling stylesheets. Import them into your styles.scss. 

```sass
@import "ember-material-design";
```
 
To use SASS, you will need to either install `broccoli-sass` or `ember-cli-sass`.

```
$ ember install ember-cli-sass
```

This project does not provide any vendor prefixes. It is highly recommended to use an autoprefixer. I prefer to use `ember-cli-autoprefixer`
which can be installed as an addon very easily.

```
$ ember install ember-cli-autoprefixer
```

Any variables you want to set should be set prior to importing the `ember-material-design` stylesheet.

For example, to change the `$primary` color:

```sass
$primary: 'red';

@import "ember-material-design";
```


## Fonts

By default, the `RobotoDraft` font is used from the Google Fonts api. To include this font, add the following line in the 
`<head>` section of your index page.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=RobotoDraft:300,400,500,700,400italic">
```

If you wish to use another font, overwrite the `$font-family` in a .scss file before your `@import "ember-material-design";`.

## Real World Usage

If you're using this addon, I'd love to see an example of your work. Feel free to send me an email, or a pull request with your site listed here!
