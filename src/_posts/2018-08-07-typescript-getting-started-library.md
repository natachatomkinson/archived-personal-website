---
layout: post
title: Typescript, how to create a small library
date: 2017-07-09
type: post
published: true
status: publish
categories:
- bitsbobsofcodes
tags:
- education
- javascript
- es6
- es7

meta:
email: natseg@gmail.com
display_name: natseg
---

## Typescript

 * superset of Javascript created by Microsoft
 
 It offers all of javascript offers and some extra because ultimately typescript compiles to your target Javascript.
 
 * glimpse into the future of ECMAScript
 
 It can compile features from future versions of ECMAScript into your target JS.
 
 ### Type system
 
 ##### Why add types?
 
 In short, types make it easier to understand the intention and purpose.
 Making refactoring easier.

 ##### Type system:
  
    Optional
    
    Implicit or Explicit
    
    Does not prevent emitting valid JS
    so as long as your typescript is legal JS - even if it's not legal typescript - you will get javascript.
    
    Asserts does not cast
    
    There is no type casting: ie no changing an entity of one data type into another, just assertions.
    You tell typescript's compiler what to expect. 
    Proptypes in React work in a similar way.
    
