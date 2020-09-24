import "minireset.css";
import "@glrodasz/components/styles/globals.css";
import "@glrodasz/components/styles/tokens.css";

function MyApp({ Component, pageProps }) {
  return (
    <div
      style={{
        width: 375,
        padding: "40px 30px",
        border: "1px solid rebeccapurple",
        margin: "0 auto",
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
