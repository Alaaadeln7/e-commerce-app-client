import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, errorMessage: "" });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
          <h2 className="text-2xl font-bold text-error mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">
            {this.state.errorMessage || "We're sorry for the inconvenience. Please try refreshing the page."}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.handleReset();
              window.location.reload();
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
