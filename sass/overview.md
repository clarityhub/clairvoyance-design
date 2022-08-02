# Clarity Hub Style Guide

## Welcome to the Clarity Hub style guide.

This tool provides users with a guide to scss partials to build webpages and react components. This guide, along with Storybook, will act as a living document that reflects current design principles and components.

You can use this tool to:
  * View the style guide
  * Copy color values
  * Look up variable names
  * Modify existing styles on the fly

## Styles

Clarity Hub colors and styles are shared between all
Clarity Hub media. Updating variables should reflect
across all services using Clarity Hub templates.

### Colors

Clarity Hub uses three main theme colors and three main typography
colors. Along with these colors, there are three theme gradients for use for promotional material, backgrounds, and banners.

### Font

There are three fonts, used for large text, subheadings, and regular text, respectively. While there are no set typography sizes, remember to account for differences in presentation between different screen sizes and displays (ie, retina).

## Visual Components

Controls are used to show styles for the most common control elements. Here you can see how desktop and mobile buttons will look, and the base styling for various types of inputs.

### Buttons vs Block Buttons

Regular buttons are what a desktop user would see. Block buttons are full width and what a mobile user would see.

### Inputs

Inputs seen here are styled with css only to have a material ui look and feel. If you want to use the functionality of labelled inputs with the label animating as if it was the placeholder text, you need to use additional classes along with some Javascript to mark an input as dirty when it has text.

## Grid

We use a 12 column grid layout using Bourbon's Neat. See the grid page to see specifics about the gutter size and columns.
