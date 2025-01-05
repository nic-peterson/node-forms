// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;

    // Add dummy data
    this.addUser({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      age: 30,
      bio: "Software developer who loves coffee and coding",
    });

    this.addUser({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      age: 28,
      bio: "Digital marketing specialist with a passion for analytics",
    });

    this.addUser({
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.j@example.com",
      age: 45,
      bio: "Experienced project manager",
    });

    this.addUser({
      firstName: "Alice",
      lastName: "Williams",
      email: "alice.w@example.com",
      bio: "UX designer and artist", // no age provided - testing optional field
    });

    this.addUser({
      firstName: "Mike",
      lastName: "Brown",
      email: "mike.brown@example.com",
      age: 35, // no bio provided - testing optional field
    });
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();
