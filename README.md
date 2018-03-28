# Forms within buttons, oh my!
Inspired by https://dribbble.com/shots/1937525-Create-New-Project

## Examples
![Examples](https://sconstantinides.github.io/FormButtons/img/example.gif)

## Getting started
1. Get the JS (also requires jQuery): [Normal JS](https://github.com/sconstantinides/FormButtons/blob/master/js/form_buttons.js) or [Minified JS](https://github.com/sconstantinides/FormButtons/blob/master/js/min/form_buttons.min.js)
2. Get the CSS: [Sass](https://github.com/sconstantinides/FormButtons/blob/master/sass/form_buttons.sass) or [Normal CSS](https://github.com/sconstantinides/FormButtons/blob/master/css/form_buttons.css) or [Minified CSS](https://github.com/sconstantinides/FormButtons/blob/master/css/min/form_buttons.min.css)
3. Add the buttons: HTML example below or [HAML](https://github.com/sconstantinides/FormButtons/blob/master/index.haml)

```html
<div class="form-button auto-close red">
  <label for="name" class="cta">
    <i class="icon fa fa-file-text-o"></i>
    <span class="text">Create new file</span>
  </label>
  <input class="input" type="text" placeholder="File name" id="name" name="name">
  <button class="submit" type="submit">
    <i class="fa fa-arrow-right"></i>
  </button>
</div>
```

## Options
Options can be set by mixing & matching classes on `<div class="form-button">`
- **Width:** Fixed-width by default. Add class "full-width" to have the input expand to fill its container.
- **Auto-close:** Class "auto-close" returns the button to its initial state when the user clicks elsewhere.

## Feedback
Feel free to open issues with suggestions or submit pull requests.
