import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Frss%2Fsearch%3Fq%3DNaam%2BTamilar%2BKatchi%26hl%3Den-IN%26gl%3DIN%26ceid%3DIN%3Aen');
        const data = await response.json();

        if (data.status === 'ok') {
          // Store all available articles
          setNewsItems(data.items);
        } else {
          // Fallback to error state if proxy fails
          setError(true);
        }
      } catch (err) {
        console.error("News fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div className="news-page pb-5">
      <div className="page-header text-white text-center py-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/news.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="tamil-text pt-4">செய்திகள் (News & Updates)</h1>
        <div className="divider mt-3 mx-auto"></div>
      </div>

      <div className="container mt-5">
        <div className="news-grid" style={{ marginTop: '2rem' }}>
          {loading ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 0' }}>
              <p>Loading live news from Google News...</p>
            </div>
          ) : error ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 0' }}>
              <p className="text-red">Unable to aggregate live news. Please try again later.</p>
            </div>
          ) : newsItems.length > 0 ? (
            newsItems.slice(0, visibleCount).map((news, index) => (
              <div key={index} className="animate-on-scroll show">
                <Card
                  image={news.thumbnail || "https://images.unsplash.com/photo-1541872511475-731ccadd7291?q=80&w=800&auto=format&fit=crop"}
                  date={new Date(news.pubDate.replace(/-/g, '/')).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  title={news.title.replace(/ - .*/, '')} // Removes Google News publication suffix
                  description={(news.description || "").replace(/(<([^>]+)>)/gi, "").substring(0, 100) + "..."}
                  actionText="Read Source Article"
                  onAction={() => window.open(news.link, '_blank')}
                />
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 0' }}>
              <p>No recent news found at this time.</p>
            </div>
          )}
        </div>

        {visibleCount < newsItems.length && (
          <div className="text-center mt-5">
            <button className="btn btn-outline btn-large" onClick={handleLoadMore}>Load More Updates</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
