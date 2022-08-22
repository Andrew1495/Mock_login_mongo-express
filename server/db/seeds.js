use login;
db.dropDatabase();

db.users.insertMany([
    {name: "andrew",
    password: 123,
    logged_in: "false"},
    {name: "bob",
    password: 123,
    logged_in: "false"},
    {name: "frank",
    password: 123,
    logged_in: "true"}
])