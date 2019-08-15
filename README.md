# Bitewise.club

# `Winning submission @ Capital One SWE Summit Hackathon`

![](https://travis-ci.org/bitewise-club/bitewise-app.svg?branch=master)

```
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                             6              0              0          17618
JavaScript                      25            144             33            845
CSS                              3             14              1            111
YAML                             1              0              0              3
Markdown                         1              1              0              2
-------------------------------------------------------------------------------
SUM:                            36            159             34          18579
-------------------------------------------------------------------------------
```

## What's on your plate?

Bitewise is built off of layered API's to deliver immediate value to the user,
with the use of pre-trained machine learning models specific to food that help
identify the ingredients of any food from just a picture.

## The Problem

Before Bitewise, there was no convenient way to derive specific products from
something as simple as a picture. If you went out to eat and saw an interesting
dish you wanted to make later, or even saw something on social media, you had 
no practical way of figuring out what went into making it.

In fact, students spend in excess of 11 billion dollars going out to eat every
year. Preprepared food vendors can charge markups of up to 300%. If only there
was a solution that helped people to **eat healthier**, **spend healthier**,
and **live wealthier**.

## Meet Bitewise

You can see the app at [bitewise.club](bitewise.herokuapp.com). It is super
simple to use. All the user needs to do is upload a photo, and Bitewise handles
the rest.

Image bytecode data is first stored in Google Firebase, where the hosted
url is then passed into Clarifai's food recognition API. The output of that is
refined through Spoonacular's product data API asynchronously to offer specific
product recommendations and reference prices which are dynamically summed
according to selected products.

## What's next?

In the future, as we scale, we could continue to layer API's to retrieve specific
products or even train a more granular machine learning model that recognizes
brands (or at least more popular ones).

In addition, Bitewise would benefit greatly under a partnership with big grocery
chains like Walmart or Whole Foods, and could provide even more accurate and
relevant data with access to developer and/or internal API's.