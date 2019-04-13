# Node.js + MongoDB Todo's API
> By Mvtthew!

## Quick installation start

```
# Run in Docker
docker-compose up
```

## REST API guide

### Getting all Todo's
```
# GET :8080/api/todos
```
API returns JSON encoded array of objects & response code 200
```
[
  {
    "done": false,
    "_id": "5cb22bb22c3c7d0012f9ca1c",
    "name": "Go to shop...",
    "__v": 0
  },
  {
    "done": true,
    "_id": "5cb22bc02c3c7d0012f9ca1d",
    "name": "Make salad!",
    "__v": 0
  },
  {...}
]
```

### Creating Todo
```
# POST :8080/api/todo

Fields:
    `name`  [string]    :required
```
    
API returns JSON encoded created object & response code 200
```
{
  "done": false,
  "_id": "5cb22c962c3c7d0012f9ca1e",
  "name": "Be nice!",
  "__v": 0
}
```

### Editing Todo
```
# PUT :8080/api/todo
Fields:
    `id`    [string]    :required
    `name`  [string]    :required
    `done`  [boolean]   :required
```

API returns JSON encoded message & response code 200
```
{
  "message": "Todo updated"
}
```

### Deleting Todo
```
# DELETE :8080/api/todo
Fields:
    `id`    [string]    :required
```

API returns JSON encoded message & response code 200
```
{
  "message": "Todo deleted"
}
```

### Have fun creating your own Todo list!
Take care!
> Mvtthew