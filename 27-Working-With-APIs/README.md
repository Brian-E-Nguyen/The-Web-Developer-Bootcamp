# Working With API's

## 1. Into to API's

__API__ stands for _Application Programming Interface_. They are interfaces for code/computers to talk to one another

__Web API's__ genrally communicate via HTTP. This is generally what is referred to when mentioning API's

- Twitter API, give me all tweets that mention "ice cream"
- Facebook API, send me the current user's profile picture
- Weather API, what is the weather in Missoula Montana?
- Reddit API, what is the current top post?
- GooglePlaces API, what gas stations are near the user?
- Yelp API, give me 10 restaurants in the zipcode 94110

A bunch of API's can be found at https://www.programmableweb.com/

## 2. JSON and XML

When we use the internet, we make an HTTP request and get HTML back

API's don't respond with HTML. HTML contains the information of the structure of the page. API's respond with the data, not the structure

These formats are _JSON_ and _XML_

### 2.1 XML

Extended Markup Language (XML) is syntacticly similar to HTML, but it does not describe presentation like HTML does

```xml
<person>
    <age>21</age>
    <name>Travis</name>
    <city>Los Angeles</city>
</person>
```

### 2.2 JSON

Javascript Object Notation (JSON) looks exactly like JavaScript objects, but everything is a string

```json
{
 "person": {
   "age": "21",
   "name": "Travis",
   "city": "Los Angeles"
 }
}
```

JSON is becoming more popular because a lot of the times we are making API calls, we are using JavaScript. You do need quotes around the keys