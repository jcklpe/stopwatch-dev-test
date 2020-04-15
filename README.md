# UI Exercise

Hi,

Thank you for checking out my project. Let's start with the assignment prompt that I received:

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

I did not hit the mark on this front. I'm honestly more of a designer than a full dev, which is reflected in the fact that I originally applied for the UX Dev role.

I tried to figure out my own solution the best I knew how and make my code as readable and easy to follow as possible. From my research it seems that the solution to this would be something to do with object-factories/classes of some sort.

I def want to continue learning and improving my technical skills though.


> - Make sure it is responsive.

check! ✅


> ### Pointers:
> - Focus on a complete solution, and high quality.

I hope I hit the mark here. I made a few choices that I think serve to improve the completeness and quality of the code.

1. I used `getAnimationFrame` since it's supposed to have better performance than setInterval
2. I based the timer off a comparison log of Unix Epoch time instead of just using an incrementer as apparently both getAnimationFrame and setInterval aren't super accurate and that can lead to some millisecond drift. (my original solution was just to run setInterval with ++time)

> - Demonstrate your knowledge of Object Oriented principals.

I honestly have more exposure to functional programming. I'm pretty much self taught and that's what's "hip" right now so as a result it's what I've been exposed to. Pretty sure that's why I had trouble with the multiple components on page problem since all the solutions to that issue that I found seem to rely on object oriented concepts.

> - Demonstrate your knowledge of CSS.

I kept things pretty simple. but hopefully my design sense shows through.

> - Try to avoid using libraries, but don’t let that impede your ability to provide a working solution.

I did not use any libraries. I have relied heavily on frameworks and libraries in my learning proecss, so lately I've been consciously trying to focus on vanilla js and get away from that crutch. I did use the parcel bundler for scss and babel transpilation. First time using it! Way less overhead compared to webpack. I like it.

To run the app just run `npm install` and then `npm run start`.
