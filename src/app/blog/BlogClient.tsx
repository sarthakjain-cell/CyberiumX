"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { BlogPost, blogCategories } from '@/data/blogs';
import styles from './Blog.module.css';

interface BlogClientProps {
  initialBlogs: BlogPost[];
}

export default function BlogClient({ initialBlogs }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'quick' | 'long' | 'alpha'>('default');

  // Count items per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: initialBlogs.length };
    initialBlogs.forEach((b) => {
      counts[b.category] = (counts[b.category] || 0) + 1;
    });
    return counts;
  }, [initialBlogs]);

  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Filter and sort blogs
  const filteredBlogs = useMemo(() => {
    let result = [...initialBlogs];

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter((b) => b.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.desc.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'quick') {
      result.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
    } else if (sortBy === 'long') {
      result.sort((a, b) => parseInt(b.readTime) - parseInt(a.readTime));
    } else if (sortBy === 'alpha') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [initialBlogs, selectedCategory, searchQuery, sortBy]);

  // Sliced blogs for rendering (show all when searching, otherwise slice by visibleCount)
  const displayedBlogs = useMemo(() => {
    if (searchQuery.trim()) return filteredBlogs;
    return filteredBlogs.slice(0, visibleCount);
  }, [filteredBlogs, visibleCount, searchQuery]);

  const hasMore = !searchQuery.trim() && visibleCount < filteredBlogs.length;

  return (
    <div>
      {/* Category Filter and Search Toolbar */}
      <div className={styles.filterToolbar}>
        {/* Category Tabs */}
        <div className={styles.filterTabs}>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.filterTab} ${selectedCategory === cat ? styles.filterTabActive : ''}`}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(12);
              }}
            >
              <span>{cat}</span>
              <span className={styles.countBadge}>
                {categoryCounts[cat] || 0}
              </span>
            </button>
          ))}
        </div>

        {/* Search and Sort Row */}
        <div className={styles.searchSortRow}>
          <div className={styles.searchWrapper}>
            <svg
              className={styles.searchIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search tutorials, machines, CVEs, or tools (e.g. CyberChef, SQLi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            className={styles.sortSelect}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            aria-label="Sort articles"
          >
            <option value="default">Default Order</option>
            <option value="quick">Quickest Read</option>
            <option value="long">In-Depth Walkthroughs</option>
            <option value="alpha">Alphabetical (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Blog Cards Grid */}
      {displayedBlogs.length > 0 ? (
        <>
          <div className={styles.blogGrid}>
            {displayedBlogs.map((blog, index) => (
              <div key={blog.slug || index} className={styles.blogCard}>
                <div className={styles.blogImageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className={styles.blogImage}
                  />
                </div>
                <div className={styles.blogCardContent}>
                  <div className={styles.blogHeader}>
                    <span className={styles.blogCategory}>{blog.category}</span>
                    <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className={styles.blogTitle}>
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <p className={styles.blogDesc}>{blog.desc}</p>
                  <div className={styles.readMore}>
                    <Link
                      href={`/blog/${blog.slug}`}
                      aria-label={`Read article: ${blog.title}`}
                    >
                      <span>Read Article</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
              <button
                type="button"
                className="btn-outline"
                style={{
                  padding: '0.9rem 2.2rem',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  borderRadius: '10px'
                }}
                onClick={() => setVisibleCount((prev) => prev + 12)}
              >
                Load More Write-ups ({filteredBlogs.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </>
      ) : (
        <div className={styles.noResults}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
          <h3 className={styles.noResultsTitle}>No articles found</h3>
          <p className={styles.noResultsDesc}>
            We couldn&apos;t find any write-ups matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
          </p>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setSortBy('default');
            }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
