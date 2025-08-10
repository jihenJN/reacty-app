function User( {id , name , username}) {
  return (
    <div style={{ border: "red solid 1px", margin: "4px" }}>
      <h1>{name}</h1>
      <h1>{username}</h1>
      <h1>{id}</h1>
    </div>
  );
}

export default User;
