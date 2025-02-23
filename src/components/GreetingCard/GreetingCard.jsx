import "./GreetingCard.scss"

function GreetingCard() {
  return (
    <div className="d-flex flex-column gap-1 greeting-card">
      <p className="user-greeting">Hi Mr. Michael,</p>
      <p className="greeting-message">Welcome Back!</p>
    </div>
  );
};

export default GreetingCard;
