# Forms within buttons, oh my!
Inspired by https://dribbble.com/shots/1937525-Create-New-Project

## Fixed-width examples
The input width is based on the length of the label.

![Fixed-width example](http://www.steliosconstantinides.com/FormButtons/img/fixed.gif)

```haml
// HAML for the red button
  .form-button.fixed-width.red
    %label.cta{ for: "name" }
      %i.icon.fa.fa-file-text-o
      %span.text Create new file
    %input.input{ type: "text", placeholder: "File name", id: "name", name: "name" }
    %button.submit{ type: "submit" }
      %i.fa.fa-arrow-right
```

## Full-width examples
The inputs expand to fill their containers.

![Fixed-width example](http://www.steliosconstantinides.com/FormButtons/img/full.gif)

```haml
// HAML for the green button
  .form-button.full-width.green
    %label.cta{ for: "search" }
      %i.icon.fa.fa-search
    %input.input{ type: "text", placeholder: "Search...", id: "search", name: "search" }
    %button.submit{ type: "submit" }
      %i.fa.fa-arrow-right
```

## Feedback
I would love any feedback or suggestions: sconstantinides [at] gmail [dot] com
