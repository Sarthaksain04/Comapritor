import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ShoppingShort } from '@/pages/shorts';
import { shortsData } from './shortsData';
import ShortCard from "./ShortCard";
import { Loader2 } from 'lucide-react';
import { fetchShortVideos } from "./api/shortsApi";


const ShoppingShorts: React.FC = () => {
  const [shorts, setShorts] = useState<ShoppingShort[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const shortRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Fetch shorts from API

  const loadVideos = async (pageNum = 1) => {
  try {
    const data = await fetchShortVideos(pageNum);

    if (data.length === 0) {
      setHasMore(false);
      return;
    }

    setShorts(prev => [...prev, ...data]); // append
  } catch {
    setError("Failed to load videos");
  } finally {
    setLoading(false);
  }
};
 useEffect(() => {
  loadVideos(1);
}, []);

  // Setup Intersection Observer to track which short is in view
  useEffect(() => {
    if (!shorts.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setCurrentIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Observe all short elements
    shortRefs.current.forEach((element) => {
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [shorts]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToShort(Math.min(currentIndex + 1, shorts.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToShort(Math.max(currentIndex - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, shorts.length]);

  useEffect(() => {
  if (!hasMore || loading) return;

  if (currentIndex === shorts.length - 1) {
    const nextPage = page + 1;
    setPage(nextPage);
    loadVideos(nextPage);
  }
}, [currentIndex, hasMore, loading, page, shorts.length]);

  const scrollToShort = (index: number) => {
    const element = shortRefs.current.get(index);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

 const handleLike = useCallback((shortId: string) => {
  setShorts((prev) =>
    prev.map((s) =>
      s.id === shortId ? { ...s, likes: s.likes + 1 } : s
    )
  );
}, []);

const handleAddToCart = useCallback((short: ShoppingShort) => {
  console.log("Added to cart:", short);
}, []);

  const handleShare = useCallback((short: ShoppingShort) => {
    if (navigator.share) {
      navigator.share({
        title: short.product_name,
        text: short.description,
        url: short.product_link || window.location.href,
      }).catch(() => {
        // Fallback for browsers that don't support Web Share API
        copyToClipboard(short.product_link || window.location.href);
      });
    } else {
      copyToClipboard(short.product_link || window.location.href);
    }
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <Loader2 className="w-12 h-12 animate-spin text-white" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <div className="text-center text-white">
          <p className="text-xl mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (shorts.length === 0) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <p className="text-xl text-white">No shopping shorts available</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      data-testid="shopping-shorts-container"
    >
      <style>{`
        .shopping-shorts-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {shorts.map((short, index) => (
        <div
          key={short.id}
          ref={(el) => {
            if (el) shortRefs.current.set(index, el);
          }}
          data-index={index}
          className="h-screen snap-start snap-always"
        >
          <ShortCard
            short={short}
            isActive={index === currentIndex}
            onLike={handleLike}
            onAddToCart={handleAddToCart}
            onShare={handleShare}
          />
        </div>
      ))}

      {/* Navigation hint */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm flex items-center gap-4 pointer-events-none">
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-white/10 rounded">↑</kbd>
          <kbd className="px-2 py-1 bg-white/10 rounded">↓</kbd>
          <span>Navigate</span>
        </div>
        <div className="text-white/40">|</div>
        <div>
          <span>{currentIndex + 1} / {shorts.length}</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingShorts;
