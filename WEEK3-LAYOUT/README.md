# 03-readable-layout-starter

This example is intentionally “ugly”. Your job is to make it readable.

## Tasks (suggested order)

1) Add a baseline:
- sensible font stack
- `line-height`

2) Constrain line length:
- apply a `max-width` to the main content
- center it with `margin: 0 auto`
- add `padding`

3) Normalize spacing:
- remove surprise default margins (then add your own deliberately)

4) Add one responsive behavior:
- make the teaser cards become columns on wider screens
- keep them stacked on narrow screens

5) Make focus visible:
- add `:focus-visible` styles for links and inputs

## DevTools checklist

- Use Computed → Box Model to confirm margin/padding.
- Verify your `max-width` is applied to the intended container.

# Features

What this WEEK3-LAYOUT holds.

## Index.html

Unchanged from Starting Point, has the basic webpage format.

## Styles.css

Changed from Starting Point. Added formating to make it readable.

## README.md

Added text to bottom of original README.md for answers and descriptions.


# README Answers

Philip Garbis - Answers for Assignment

## 1) Design Goals

My goal was to make the page readable and predictable by limiting line length, improving spacing, and using a consistent layout. I focused on readability rather than decoration.

## 2) Three Biggest Changes

- Added a max-width and centered content to prevent long line lengths
- Created consistent spacing and removed default margins
- Improved typography with better font and line-height

## 3) Responsive Behavior

The teaser cards switch from stacked to two columns at 700px using CSS grid.

## 4) Screenshots

- Before (Computer)
![Website before updating on computer](/WEEK3-LAYOUT/Screenshots/WK3-Computer_Before.png)

- After (Computer)
![Website after updating on computer](/WEEK3-LAYOUT/Screenshots/WK3-Computer_After.png)

- Before (Mobile)
![Website before updating on mobile](/WEEK3-LAYOUT/Screenshots/WK3-Mobile_Before.png)

- After (Mobile)
![Website after updating on mobile](/WEEK3-LAYOUT/Screenshots/WK3-Mobile_After.png)

- Before (Tablet)
![Website before updating on tablet](/WEEK3-LAYOUT/Screenshots/WK3-Tablet_Before.png)

- After (Tablet)
![Website after updating on tablet](/WEEK3-LAYOUT/Screenshots/WK3-Tablet_After.png)


## 5) DevTools insight

I used the Computed → Box Model panel to confirm margin and padding. It helped me see which default margins were causing extra spacing.