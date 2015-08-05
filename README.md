# Forms within buttons, oh my!
Inspired by https://dribbble.com/shots/1937525-Create-New-Project

## Examples
![Examples](http://www.steliosconstantinides.com/FormButtons/img/example.gif)

## Usage
1. Get the JS: [Normal JS](https://github.com/sconstantinides/FormButtons/blob/master/js/form_buttons.js) or [Minified JS](https://github.com/sconstantinides/FormButtons/blob/master/js/min/form_buttons.min.js)
2. Get the CSS: [Sass](https://github.com/sconstantinides/FormButtons/blob/master/sass/form_buttons.sass) or [Normal CSS](https://github.com/sconstantinides/FormButtons/blob/master/css/form_buttons.css) or [Minified CSS](https://github.com/sconstantinides/FormButtons/blob/master/css/min/form_buttons.min.css)
3. Add the buttons: HAML example below or [HTML](https://github.com/sconstantinides/FormButtons/blob/master/index.html)

```haml
  .form-button.fixed-width.red
    %label.cta{ for: "name" }
      %i.icon.fa.fa-file-text-o
      %span.text Create new file
    %input.input{ type: "text", placeholder: "File name", id: "name", name: "name" }
    %button.submit{ type: "submit" }
      %i.fa.fa-arrow-right
```

## Feedback
I would love any feedback or suggestions: sconstantinides [at] gmail [dot] com
