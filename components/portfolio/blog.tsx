"use client"

import { Search, BookOpen, Calendar, ArrowRight, ArrowLeft, Loader2, Clock, User } from "lucide-react"
import { useEffect, useState, useMemo } from "react"
import Image from "next/image"

const RSS_FEED_URL = "https://earndollarsonline132.blogspot.com/feeds/posts/default"
const RSS2JSON_API = "https://api.rss2json.com/v1/api.json"

interface BlogPost {
  guid: string
  title: string
  description: string
  content: string
  pubDate: string
  link: string
  thumbnail: string
  author: string
  categories: string[]
}

interface BlogProps {
  onNavigate?: (section: string) => void
}

export function Blog({ onNavigate }: BlogProps) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(
          `${RSS2JSON_API}?rss_url=${encodeURIComponent(RSS_FEED_URL)}`
        )
        
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts")
        }
        
        const data = await response.json()
        
        if (data.status === "ok" && data.items) {
          const formattedPosts: BlogPost[] = data.items.map((item: {
            guid: string
            title: string
            description: string
            content: string
            pubDate: string
            link: string
            thumbnail: string
            author: string
            categories: string[]
          }) => ({
            guid: item.guid || item.link,
            title: item.title,
            description: stripHtml(item.description).slice(0, 160) + "...",
            content: item.content || item.description,
            pubDate: item.pubDate,
            link: item.link,
            thumbnail: item.thumbnail || extractFirstImage(item.content || item.description),
            author: item.author || "Dennis Muriithi",
            categories: item.categories || []
          }))
          setPosts(formattedPosts)
        } else {
          throw new Error(data.message || "Failed to parse blog feed")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load blog posts")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts
    const query = searchQuery.toLowerCase()
    return posts.filter(
      post =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.categories.some(cat => cat.toLowerCase().includes(query))
    )
  }, [posts, searchQuery])

  // Strip HTML tags from content
  function stripHtml(html: string): string {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent || ""
  }

  // Extract first image from HTML content
  function extractFirstImage(html: string): string {
    const match = html.match(/<img[^>]+src="([^">]+)"/)
    return match ? match[1] : ""
  }

  // Format date
  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }

  // Calculate read time
  function calculateReadTime(content: string): number {
    const wordsPerMinute = 200
    const wordCount = stripHtml(content).split(/\s+/).length
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
  }

  // Handle back from post detail
  const handleBack = () => {
    setSelectedPost(null)
  }

  // Post Detail View
  if (selectedPost) {
    return (
      <div className="py-8 px-4 min-h-full">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>

          {/* Post Header */}
          <article>
            {/* Categories */}
            {selectedPost.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedPost.categories.slice(0, 3).map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {selectedPost.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(selectedPost.pubDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{calculateReadTime(selectedPost.content)} min read</span>
              </div>
            </div>

            {/* Featured Image */}
            {selectedPost.thumbnail && (
              <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden bg-card">
                <Image
                  src={selectedPost.thumbnail}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-img:rounded-xl prose-img:my-8
                prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                prose-code:text-primary prose-code:bg-card prose-code:px-1 prose-code:rounded
                prose-pre:bg-card prose-pre:border prose-pre:border-border"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />

            {/* Read on Blogger Link */}
            <div className="mt-12 pt-8 border-t border-border">
              <a
                href={selectedPost.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Read original post on Blogger
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    )
  }

  // Blog List View
  return (
    <div className="py-8 px-4 min-h-full">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Blog</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest Articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Insights, tutorials, and tips on earning online and digital strategies.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading articles...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
              <BookOpen className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Failed to Load Posts</h3>
            <p className="text-muted-foreground mb-6">{error}</p>
            <a
              href="https://earndollarsonline132.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Visit Blog Directly
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* No Results */}
        {!loading && !error && filteredPosts.length === 0 && searchQuery && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No Results Found</h3>
            <p className="text-muted-foreground">
              No articles match "{searchQuery}". Try a different search term.
            </p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && !error && filteredPosts.length > 0 && (
          <>
            {/* Featured Post */}
            {filteredPosts.length > 0 && !searchQuery && (
              <div className="mb-12">
                <button
                  onClick={() => setSelectedPost(filteredPosts[0])}
                  className="w-full text-left group"
                >
                  <div className="grid md:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                    {/* Image */}
                    <div className="relative aspect-video md:aspect-auto md:h-full min-h-[300px] bg-gradient-to-br from-primary/20 to-secondary/30">
                      {filteredPosts[0].thumbnail ? (
                        <Image
                          src={filteredPosts[0].thumbnail}
                          alt={filteredPosts[0].title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-primary/40" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      {filteredPosts[0].categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {filteredPosts[0].categories.slice(0, 2).map((category, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      )}

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                        {filteredPosts[0].title}
                      </h3>

                      <p className="text-muted-foreground mb-6 line-clamp-3 text-lg">
                        {filteredPosts[0].description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(filteredPosts[0].pubDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{calculateReadTime(filteredPosts[0].content)} min read</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-primary font-semibold">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            )}

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(searchQuery ? filteredPosts : filteredPosts.slice(1)).map((post) => (
                <button
                  key={post.guid}
                  onClick={() => setSelectedPost(post)}
                  className="text-left group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Post Image */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/30">
                    {post.thumbnail ? (
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-primary/40" />
                      </div>
                    )}
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Categories */}
                    {post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 2).map((category, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(post.pubDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{calculateReadTime(post.content)} min</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.description}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-1 text-sm text-primary font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {/* View All on Blogger */}
        {!loading && !error && posts.length > 0 && (
          <div className="text-center mt-12">
            <a
              href="https://earndollarsonline132.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-card border border-border text-foreground font-semibold px-8 py-4 rounded-xl hover:border-primary hover:text-primary transition-all"
            >
              View All Posts on Blogger
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
