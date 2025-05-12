import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="779601c6-1d38-427a-b6f6-55438ad46dd0"
    ></Script>
  );
}
