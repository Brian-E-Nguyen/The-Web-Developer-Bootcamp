# Databases

## 1. Intro to Databases

Databases have
- a collection information/data 
- an interface. This means we can write code in it

There are two types of databases, SQL (relational) vs. NoSQL (non-relational).

### 1.1 SQL Databases
SQL databases have been around the longest. They are _tabular and flat_ databases.

__USERS TABLE__

| id | name | age | city    |
|----|------|-----|---------|
| 1  | Tim  | 57  | NYC     |
| 2  | Ira  | 24  | L.A.    |
| 3  | Sue  | 21  | Boulder |

One user has an id, name, age, and city. Every single user we have must follow this pattern

__COMMENTS TABLE__
| id | text                                          |
|----|-----------------------------------------------|
| 1  | "lol"                                         |
| 2  | "I have been involved in multiple war crimes" |
| 3  | "I love puppies"                              |
| 4  | "Agagagagagaga"                               |

If I want there to be a relationship between users and comments, we reference them with __JOIN__ tables

__USER/COMMENTS JOIN TABLE__
| userID | commentID |
|--------|-----------|
| 1      | 3         |
| 2      | 2         |
| 2      | 4         |
| 3      | 1         |

Suppose I want to add another attribute to the _USERS_ table, like favorite color. If you were to add it to one user, the rest of the users' colors would be NULL

### 1.2 NoSQL Databases

NoSQL databases are more flexible because we don't have to define patterns ahead of time

```json
{
    name: "Ira",
    age: 24,
    city: "Missoula",
    comments: [
        {text: "I have been involved in multiple war crimes"},
        {text: "Agagagagagaga"}
    ]
}
```

We don't have to define ID's and such. If we need to have another comment, for example, we can just push into the `comments` array.

How it's also more flexible is that we can add attributes that don't have to match up with other users

```json
{
    name: "Tim",
    age: 24,
    city: "Missoula",
    comments: [
        {text: "I have been involved in multiple war crimes"},
        {text: "Agagagagagaga"}
    ],
    favoriteColor: "blue"
}
```

```json
{
    name: "Tim",
    age: 57,
    city: "NYC",
    comments: [
        {text: "I love puppies"},
    ],
    favoriteFood: "tofu"
}
```

One person could have `favoriteColor` while another can have `favoriteFood`.

It is more flexible, but that doesn't mean it's better than SQL. In fact, it's worse in most cases