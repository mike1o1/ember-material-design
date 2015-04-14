

# Ember-material-design

The **Ember Material Design** project is an implementation of Material Design in EmberJS. This project 
attempts to provide a set of reusable, well-tested and accessible UI components based on the Material Design system.

This project is as close to a reference implementation of [Angular Material](http://material.angularjs.org) as 
I could make it. Most of the credit for this work belongs to that team.


## Demo

Visit [Demo Page](http://mike1234.com/ember-material-design) to view the components in action.


## Installation

Install the ember-cli addon into project

```
$ ember install ember-material-design
```

This project uses SASS for compiling spreadsheets. Import them into your styles.scss. 

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
