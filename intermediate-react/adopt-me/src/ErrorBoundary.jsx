import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasErrors: false };

  static getDerivedStateFromError() {
    return { hasErrors: true };
  }

  componentDidCatch(error, info) {
    // ideally log the message to a tracking service - perform an action
    console.error("ErrorBoundary component caught error", error, info);
  }

  render() {
    if (this.state.hasErrors) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/">Click here to go back to the home page.</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
