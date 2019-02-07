---
layout: post
title: How to make your life easier when developing a front-end library
date: 2019-01-15
type: post
published: true
status: publish
categories:
- bitsbobsofcodes
tags:
- education
- javascript
- es6

meta:
email: natseg@gmail.com
display_name: natseg
---

Also published on [dev.to](https://dev.to/natseg/how-to-make-your-life-easier-when-developing-a-front-end-library--4pjk)  
  
Let's say you have a good use case to develop a front-end library.

It could be that:
* you're re-using a lot of similar components in different apps
* you want to decouple your apps from an external api
* you want to play around with javascript for the fun of it
* ...

1. You set up your repository with git using the provider you prefer (github, gitlab, ...)
2. You can choose to use a boilerplate for the framework you wish to use (Typescript, React, both, ...)
3. Once you have done this, you realize that in order to integrate with your app:
  * you need to run a build depending on the bundling manager you use (rollup, webpack, ...)
  * you need to tell your app where to find the package being developed
  
4. At this point, I would advise using `link`, a command which exists both for  <a href="https://yarnpkg.com/lang/en/docs/cli/link/" target="_blank" rel="noopener noreferrer"> yarn</a> and <a href="https://docs.npmjs.com/cli/link.html" target="_blank" rel="noopener noreferrer">npm</a>.
This creates a symbolic link between your app and the library you're working on.

5. To avoid having to "manually" rebuild after each code change in the library, use your bundler cli with the  [`watch`](https://webpack.js.org/api/cli/#watch-options) flag to watch the files recursively
6. Choose a test framework and you're ready to go!

Gotchas: 
* running `install` at any point after this will overwrite the link.
* be mindful of what locks the version in your `package.json` in doubt, you could switch from `caret` to `tilde` or lock onto exact versions (with [the --save-exact flag](https://docs.npmjs.com/cli/install))

**CODE, SWEAT, SWEAR AND TEST**

Before deploying and publishing a package that needs code-review and QA:
7. Build the latest version of your code
8. Use [`npm pack`](https://docs.npmjs.com/cli/pack.html) in the repository of your library
9. This creates a tarball file you can move to the repository of the app you want QA to test it with.
Run `mv nameoftarball ../wherever/your_app/lives`
Then `cd ../wherever/your_app/lives && npm i nameoftarball`

10. Commit, push, deploy to a staging/test environment
11. When you get the all clear, whatever you deploy will be spot-on! 
