import "./App.css";

function UserGreeting(props) {
  return <h1>Welcome Back {props.user}!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please Sign Up</h1>;
}

export function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const user = props.user;
  if (isLoggedIn) {
    return <UserGreeting user={user} />;
  }
  return <GuestGreeting />;
}

export function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

export function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}
