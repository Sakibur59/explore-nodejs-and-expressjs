const UserPage = async () => {
  const res = await fetch("http://localhost:8000/users");
  const users = await res.json();
  console.log(users);
  return (
    <div>
      <h1>User:{users.length}</h1>
      {users.map((user) => {
        return (
          <div key={user.id} className="grid grid-cols-3">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UserPage;
