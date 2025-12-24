function CardProp({ name, age, city, hobby }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "260px",
      }}
    >
      <h1>Hello {name}</h1>

      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Hobby: {hobby}</p>
      <p>Status: Active user</p>
      <p>Message: Welcome to the app!</p>
    </div>
  );
}

export default CardProp;
