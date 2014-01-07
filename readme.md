# gulp-scaffold

Use Gulp to scaffold things.

## How To

Clone this repo:

```sh
git clone http://github.com/distilledhype/gulp-scaffold
```

Then install all the dendencies with 

```js
npm install 
```

Now you can go ahead and scaffold READMEs:

```sh
// Scaffold a README.md.
// `gulp readme --headline="My Headline" --description="Some description."`
gulp.task('readme', function () {
  gulp.src('templates/README.md')
    .pipe(template(argv))
    .pipe(gulp.dest('results/readme'));
});
```

Or JavaScript modules:

```sh
// Scaffold a JavaScript module.
// `gulp module --name="moduleName"`
gulp.task('plugin', function() {
	gulp.src('templates/module.js')
		.pipe(template(argv))
		.pipe(gulp.dest('results/module/' + argv.name.toLowerCase() + '.js'));
});
```

Or anything you want, really.
