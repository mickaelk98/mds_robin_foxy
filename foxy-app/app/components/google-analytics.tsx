import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <Script
      defer
      src="http://127.0.0.1:3000/script.js"
      data-website-id="611bda5d-db11-48c5-98d6-4e992321759b"
    ></Script>
  );
}
