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

check! ✅


> - Make sure it is responsive.

check! ✅


> ### Pointers:
> - Focus on a complete solution, and high quality.

I hope I hit the mark here. I made a few choices that I think serve to improve the completeness and quality of the code.

1. I used `getAnimationFrame` since it's supposed to have better performance than setInterval
2. I based the timer off a comparison log of Unix Epoch time instead of just using an incrementer as apparently both getAnimationFrame and setInterval aren't super accurate and that can lead to some millisecond drift. (my original solution was just to run setInterval with ++time)

> - Demonstrate your knowledge of Object Oriented principals.

check! ✅
I actually taught myself Javascript classes in order to do this! This is my first OOP app ever!

> - Demonstrate your knowledge of CSS.

check! ✅
I kept things pretty simple. but hopefully my design sense shows through.

> - Try to avoid using libraries, but don’t let that impede your ability to provide a working solution.
check! ✅
100% vanilla ES6


To run the app just run `npm install` and then `npm run start`.
