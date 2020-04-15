# UI Exercise



Hi,

Thank you for checking out my project. Let's start with the project's challenge prompt that I received:

> Using only HTML, CSS and plain Javascript, create a Stopwatch application that meets _at least_ the following criteria:
> -  Supports a start button/feature, which begins the clock.

check! ✅
> - Supports a pause button/feature, which pauses the clock.

check! ✅
> - Supports a resume button/feature, which resumes a paused clock.

check! ✅
> - Supports a reset button/feature, which resets the time.

check! ✅
> - Supports being insert on a page multiple times, i.e. 3 or more separate clocks should be able to run independently at once.

I didn't actually hit the mark on this part of the project. I'm still learning, and while I know that this probably has to do with object factories/constructors I'm not super familar with that pattern. So I'm taking a crack at it tonight but not sure if it will be done before you review this project. I've created an alt-index html and index file though to experiment with though.

> - Make sure it is responsive.

check! ✅

> ### Pointers:
> - Focus on a complete solution, and high quality.

I hope I hit the mark here. I made a few choices that I think hopefully serve to improve the completeness and quality of the code.

1. I used `getAnimationFrame` since it's supposed to have better performance than setInterval
2. I based the timer off a comparison of Unix Epoch time instead of just using an incrementer as apparently both getAnimationFrame and setInterval aren't super accurate and that can lead to some millisecond drift.

> - Demonstrate your knowledge of Object Oriented principals.

I honestly have more exposure to functional programming. I'm pretty much self taught and that's what's "hip" right now so as a result it's what I've been exposed to. Pretty sure that's why I had trouble with the multiple components on page problem though so I'm reading up.

> - Demonstrate your knowledge of CSS.

I kept things pretty simple. but hopefully my design sense shows through.

> - Try to avoid using libraries, but don’t let that impede your ability to provide a working solution.

I did not use any libraries. I have use relied heavily on frameworks and libraries so I've been consciously trying to focus on vanilla js and get away from that crutch. I did use the parcel bundler for scss and babel transpilation. First time using it! Way less overhead compared to webpack. I like it.

To run the app just run `npm install` and then `npm run start`. You can run the alt-index using `npm run alt`.
