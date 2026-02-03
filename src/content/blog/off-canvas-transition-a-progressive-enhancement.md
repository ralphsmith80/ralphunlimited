---
title: "Off Canvas Transition: A Progressive Enhancement"
description: Don't wanna read here's the big demo. I don't recall the first
  place I saw the off canvas pattern implemented but when I first noticed it I
  was a huge fan. I've
pubDate: 2014-09-03T12:34:43.000Z
slug: off-canvas-transition-a-progressive-enhancement
categories:
  - development
---

Don’t wanna read here’s the big [demo](http://htmlpreview.github.io/?https://gist.githubusercontent.com/ralphsmith80/7ed447bc070b255a3168/raw/ecc83d0ab7a06b40b960c5e378531a5cfe67c640/off-canvas-transistion).

I don’t recall the first place I saw the off canvas pattern implemented but when I first noticed it I was a huge fan. I’ve read some recent articles that have been advocating against the off canvas pattern. Mostly in the context of using it as a menu. The idea being that hiding a menu creates a poor user experience. In general I would agree, but in the spirit of responsive design there are some places where it just makes sense.

This isn’t going to be a post advocating the use of the off canvas pattern. Or maybe it is, but that was not my purpose. I’ve been wanting to try my hand at implementing an off canvas view just to see what I could come up with. I’ve read a number of blogs about off canvas implementations and it’s come a long way and since I’m just now getting around to it, it’s become remarkably easy thanks to CSS transition and transform support. Time was on my side for this one or rather my lack of time.

Rather than provide breadcrumbs and talk through each snippet in detail I’d prefer to just throw it all down so those that just want to copy and paste can do so. Also I believe seeing it all up front will give you an idea of how simple this is. Spoiler: despite the thin display of code below I’m still giving you more than you need already.

```css
// this was only tested back to IE8

.off-canvas {
  height: 100%;
  position: absolute;
  top: 0;
  margin-left: -100%;
  transition: 1s ease;
}
.off-canvas.show {
  margin-left: 0%;
}

```

That’s it! Easy, right? All you need to do is apply the `.off-canvas` class to the element you want to be an off canvas view and you’re done. To show the `.off-canvas` element you just add the `show` class. You were probably expecting some html right?  Well I almost did that but that’s really a [demo](http://htmlpreview.github.io/?https://gist.githubusercontent.com/ralphsmith80/7ed447bc070b255a3168/raw/ecc83d0ab7a06b40b960c5e378531a5cfe67c640/off-canvas-transistion) and obfuscates the important details, but not to worry there’s a [demo](http://htmlpreview.github.io/?https://gist.githubusercontent.com/ralphsmith80/7ed447bc070b255a3168/raw/ecc83d0ab7a06b40b960c5e378531a5cfe67c640/off-canvas-transistion) too.

The [demo](http://htmlpreview.github.io/?https://gist.githubusercontent.com/ralphsmith80/7ed447bc070b255a3168/raw/ecc83d0ab7a06b40b960c5e378531a5cfe67c640/off-canvas-transistion) is a little richer than just hiding and showing the canvas, but it’s still crazy simple! And that’s the beauty of it. The [demo](http://htmlpreview.github.io/?https://gist.githubusercontent.com/ralphsmith80/7ed447bc070b255a3168/raw/ecc83d0ab7a06b40b960c5e378531a5cfe67c640/off-canvas-transistion) is just a couple of `div`s with some fluff added to invoke the canvas show by adding a `show` class and colors to distinguish between the canvas and main content. There rest is all CSS. Neat!

I’ve said canvas about ten times now so to be clear I am not referring to the HTML canvas element. I’m just referring to a regular HTML element such as a `div` or a `span` that we are using to contain some content and move off screen until we want to view it. Clear?

## Progressive Enhancement

Now it’s time to talk about progressive enhancement as the title of this post implies. I love this concept, but I don’t see many people _really_ applying it. What I do see a lot in application is graceful degradation. So what’s the difference?

In layman’s terms when you apply graceful degradation you’re saying this is the _best_ our site will look and we’re going to work to make lesser browsers look like that. However, when you apply progressive enhancement you pick a base level of functionality and provide enhancements where they are supported. I’m going to talk about his for just a bit longer but for a thorough understanding you can read the all mighty [Wikipedia](http://www.w3.org/wiki/Graceful_degredation_versus_progressive_enhancement).

Now those two sound pretty similar so what’s the difference?

Graceful degradation involves time spent wrestling old browsers and providing polyfills. For example, you might spend your time writing a polyfill so IE8 can _look_ like it supports transitions. Probably utilizing jQuery animations … or not, whatever.

Progressive enhancement however, involves time spent working with new technology. For example you might have a `div` that’s out of view and you want to apply a CSS transition to bring it into view with a nice animation. Sound relevant?

Looking back at the above example I realize I may have provided more code than I really needed. See that transition statement:

```
transition: 1s ease;

```

That’s a progressive enhancement. At least as far back as IE8 the `margin` property is supported so we can have an off canvas `div`. However, if we’re using a newer browser like IE10+ then we get a nice 1 second easing transition on the `div` as it comes into view.  Here we’re defining a base level of functionality as  support for the CSS `margin` property. Since CSS properties that are not supported are conveniently ignored we can add new functionality like the `transition` property without having to worry about how it’s going to affect older browsers.

Most of the off canvas implementations that I’ve looked at either use jQuery to provide support for older browsers (graceful degradation) or just use the `transform` property ignoring older browsers all together.

There is a benefit to using the `transform` property. If you provide a ‘z’ dimension you can force hardware acceleration pushing bits straight to your graphics card. That can be a huge win if you’re dealing with process intensive applications. Personally I haven’t dealt with web applications utilizing an off canvas element that _really_ needed that boost, but we’re working in progressive enhancement territory here so we can introduce this benefit with two lines in our already slim code.

```
.off-canvas {
  height: 100%;
  position: absolute;
  top: 0;
  margin-left: -100%;
  transition: 1s ease;
  transform: translate3d(100%, 0, 0);
}
.off-canvas.show {
  margin-left: 0%;
  transform: translate3d(0%, 0, 0);
}

```

Whew! That was tough.

## UX Thoughts

Some UX driven people might be looking at this and scoffing at out how it behaves in older browsers. Since we’re just changing the margin property in those browsers it will just pop into view. Personally I’m 100% okay with that. Why? Because most pop-ups that I’ve seen do just that. So in those older browsers we’re providing a similar UX feel but utilizing a new mechanism for display, one that I like better.

## Demo

If you haven’t hit up the [demo](http://htmlpreview.github.io/?https://gist.githubusercontent.com/ralphsmith80/7ed447bc070b255a3168/raw/ecc83d0ab7a06b40b960c5e378531a5cfe67c640/off-canvas-transistion) yet here it is again inline just for your convenience. However, if you choose to follow the link you’ll notice it’s a gist preview and you can get to the gist [here](https://gist.github.com/ralphsmith80/7ed447bc070b255a3168). Ah, nice and easy for you to grab that demo code. As I mentioned the demo does have a bit more fluff and I wanted to talk about that just a bit more. So checkout the demo and read on.

<iframe src="https://htmlpreview.github.io/?https://gist.github.com/ralphsmith80/7ed447bc070b255a3168/raw/ecc83d0ab7a06b40b960c5e378531a5cfe67c640/off-canvas-transistion" width="320" height="480" frameborder="0" title="Off Canvas Transition Demo"></iframe>

In my [demo](http://htmlpreview.github.io/?https://gist.githubusercontent.com/ralphsmith80/7ed447bc070b255a3168/raw/ecc83d0ab7a06b40b960c5e378531a5cfe67c640/off-canvas-transistion) I just used the body as the main container, but you need to mind the margin here. Since there is commonly a margin on the body I had to set `margin: 0` so the off canvas element was flush with the edge. This would be true of any container that you wanted to put an off canvas element in or more specifically the margin that the canvas view was coming in on. In this case we could have just set `margin-left: 0` and you’d probably want the top and bottom margins set to 0 as well just for good measure. `margin: 0` is just easier unless you _really_ wanted that right margin.

Did you notice the main content drop before the canvas view came into view? Well that’s just me playing around and completely unnecessary. It’s out of scope for this growing article but I like the effect so I kept it in. Credit to [Mary Lou](http://tympanus.net/codrops/author/crnacura/) for the idea, thanks! And that drop is implemented as a progressive enhancement so as expected it’s a small amount of code.

In the [demo](http://htmlpreview.github.io/?https://gist.githubusercontent.com/ralphsmith80/7ed447bc070b255a3168/raw/ecc83d0ab7a06b40b960c5e378531a5cfe67c640/off-canvas-transistion) I provided different transitions so the slide and drop animate at different speeds. This makes the two animations look very nice together but again this is completely unnecessary and out of scope. If you are curious make sure to checkout the gist. It’s easy, I promise.

## Support

I didn’t go crazy testing this on a bunch of different elements, but I did apply it to two distinctly different elements `div` and `span`. It works fine in both cases and I would wager it would work fine on any `block`, `inline`, and `inline-block` elements.

I tested the [demo](http://htmlpreview.github.io/?https://gist.githubusercontent.com/ralphsmith80/7ed447bc070b255a3168/raw/ecc83d0ab7a06b40b960c5e378531a5cfe67c640/off-canvas-transistion) back to IE8, but according to [caniuse](http://caniuse.com/#search=margin) this will work in “all commonly used browsers” since it is only reliant on `margin` property.

## Finally

Finally, I’d like to leave you with a bit of inspiration for applying your (hopefully new) off canvas element skills. While I did talk about utilizing off canvas elements for menus in the beginning of this article it has much more potential than just menus. I’ve been utilizing this myself to present forms rather than utilizing a modal (pop-up) view. Personally I _hate_ pop-ups. I think they’re annoying, they get in the way, and they’re overly invasive. An off canvas form just feels so much smoother to me.

Also [this post](https://medium.com/@mibosc/responsive-design-why-and-how-we-ditched-the-good-old-select-element-bc190d62eff5) by [Mikkel Bo Schmidt](https://medium.com/@mibosc) at Tradshift is quite inspiring. It’s a complete reimagining of the basic select element and the end results are great!

## References

As I mention earlier I’ve read a number of articles on the off canvas pattern, but just before implementing my own I read two to refresh my memory. Both utilized the the transform approach and are worthy reads.

-   [Transition For Off-Canvas Navigations](http://tympanus.net/codrops/2013/08/28/transitions-for-off-canvas-navigations/)
-   [Off Canvas Menus with CSS3 Transitions and Transforms](http://scotch.io/tutorials/off-canvas-menus-with-css3-transitions-and-transforms)

What are you thoughts on this off canvas approach?
