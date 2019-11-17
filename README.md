# Zen-Frame

[![Build Status](https://travis-ci.org/Aitem/zen-frame.svg?branch=master)](https://travis-ci.org/Aitem/zen-frame)
[![Clojars Project](https://img.shields.io/clojars/v/zen-frame.svg)](https://clojars.org/zen-frame)


## Overview

Library for connect brouwser with reagent/re-frame application

## Demo 

[Demo page](https://aitem.github.io/zen-frame/)

## Base concepts

### Router

All application as a function(url)

Route - declarative description of your application with additional meta information
Context long time data - pseudo synchronous page loading (wait untill all parent context call `done`)

### Router Tools

Some preapared tool


__Page__
  Uniq pages
  Pages life cycle, page state
  View / Model / Form  composition

__Layout__
  Page wrapper

__Page titler__

__Breadcrumbs__

__Logging__
  Gen corr-id

__Access Control__
  Primitive pages isolation by some atts

### Extensability

Custom route MV
