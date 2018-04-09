# Opine 

> ## Opine
>
> /ə(ʊ)ˈpʌɪn/
> 
> verb formal
>
> _hold and state as one's opinion_.
>
> "‘The man is a genius,’ he opined"

This application will be a very simple twitter like clone as set by
Tyler McGinnis as a little project at the end of his redux course.

See here for more information: https://github.com/tylermcginnis/redux-twitter

A working example, by Tyler is found here: https://tylermcginnis.com/projects/redux-twitter/

## Project Summary

The aim is to replicate the functionality present in the working example provided above.
Below I will breakout the app into the required pages, components and functionality, after which
I can attempt to make a sane prototype of the required state and actions that will be needed in
the redux store. Once these have been outlined I will begin developing the application.

## Pages

All pages have the Navigation bar at the top of the page

#### Home Page - Route '/'

Displays Navbar, Heading, and stacked list of all tweets.

#### Tweet Page - Route '/tweet/:tweetId'

Displays Navbar, specific tweet, Tweet Input, and list
of tweets that are in response to the tweet being viewed. 

#### New Tweet - Route '/new'

Displays Navbar, and Tweet Input component.

## Components

#### NavBar

Has links to Go back to the home page or to the create a tweet page.

#### Heading

Visible on the new page and home page. 

#### TweetList

This is a list of tweets. On the main page it shows all tweets.
On the specific tweet page it only shows responses to that tweet.

Tweets are displayed so that the newest tweet appears at the top of the list.

#### Tweet

Displays an Avatar, A name, time and date of post, Whether it was a reply (and who to),
the text content of the tweet, and two buttons (a reply button and a heart button.).
The reply button shows the number of responses the tweet as received.  
The heart displays the number of other users who have 'hearted' the tweet.

#### CreateTweet

On the /new page this will simply create a new tweet for the specified user.
When responding to another tweet it will be in response to that specfic tweet.

#### Loading Bar 

This is a plugin that is present on every page and is performed to provide feedback
as to loading progress.

#### Toast

Allows for user messages to be provided to the user.

### Functionality

Need to be able to a create a new tweet.
Need to be able to respond to a tweet. (same as create tweet but need reference to parent)
Need to be able to favourite a tweet.

## State

#### authedUser

Need to be able to identify the current user, so we can record, who it is creating a tweet,
or who it is liking / replying to tweets.

#### Tweets

Required fields:
- id
- content (not longer than 160)
- userId
- date
- likes (array)
- replies (array)
- parentTweet (if reply, else null)

#### Users

Although I won't be building functionality to alter user information within this application
it will be useful to gather user information rather than storing on tweets directly. (normalization)

Required fields:
- userId
- displayName
- avatarURL
- tweets

## Actions

#### CREATE_TWEET

This action will create a new tweet (when submit button is pressed on submit tweet form)

#### LIKE_TWEET

This action will add the logged in user to the likes array of the liked tweet.

#### DELETE_TWEET

This functionality isn't present in the app. But it will come in handy should I choose to optimistically update the DOM and I need to subsequently remove a tweet. Also, a user ought to be able to delete their
tweets after the fact.

#### SHOW_ERROR

This triggers error messaging to provide feedback to the user.