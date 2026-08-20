import Script from 'next/script';

export default function AdBanner() {
    return (
        <div className="ad-banner">
            <Script id="adsterra-config" strategy="afterInteractive">
                {`atOptions = {
          'key' : '346e644285848f18acc8cd9bf5caca8b',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };`}
            </Script>
            <Script
                src="https://www.highperformanceformat.com/346e644285848f18acc8cd9bf5caca8b/invoke.js"
                strategy="afterInteractive"
            />
        </div>
    );
}