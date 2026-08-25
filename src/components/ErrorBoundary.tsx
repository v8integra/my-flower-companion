import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Unhandled error:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, textAlign: "center", fontFamily: "sans-serif" }}>
          <h2>Something went wrong</h2>
          <p style={{ color: "#6B7E6E" }}>{this.state.error.message}</p>
          <button
            onClick={() => { this.setState({ error: null }); location.reload(); }}
            style={{
              marginTop: 16, padding: "10px 20px", borderRadius: 10, border: "none",
              background: "#4A7C59", color: "#fff", fontSize: 14, cursor: "pointer",
            }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
