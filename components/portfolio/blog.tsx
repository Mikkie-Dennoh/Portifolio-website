"use client"

import { ExternalLink, BookOpen, Calendar, ArrowRight, Loader2 } from "lucide-react"
import { useEffect, useState } from "react"

// Your Blogger blog URL
const BLOGGER_URL = "https://earndollarsonline132.blogspot.com/"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  url: string
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchBloggerPosts() {
      try {
        // Using Blogger's public feed API
        const response = await fetch(
          `https://www.blogger.com/feeds/2341aborede132/posts/default?alt=json&max-results=6`,
          { mode: 'no-cors' }
        )
        
        // Since Blogger API requires authentication or has CORS issues,
        // we'll use a fallback approach with the RSS feed via a proxy
        // For now, showing placeholder posts that link to your blog
        setLoading(false)
      } catch (err) {
        setError(true)
        setLoading(false)
      }
    }

    // For direct linking without API, we set loading to false immediately
    setLoading(false)
  }, [])

  // Featured posts - these will link directly to your Blogger
  // You can update these with your actual post titles and URLs
  const featuredPosts: BlogPost[] = [
    {
      id: "1",
      title: "Earn Dollars Online - Getting Started",
      excerpt: "Discover proven strategies and methods to earn money online from the comfort of your home...",
      date: "2024-01-15",
      url: BLOGGER_URL
    },
    {
      id: "2",
      title: "Online Income Opportunities",
      excerpt: "Explore various online income opportunities that can help you achieve financial freedom...",
      date: "2024-01-10",
      url: BLOGGER_URL
    },
    {
      id: "3",
      title: "Tips for Online Success",
      excerpt: "Learn essential tips and tricks to maximize your online earning potential...",
      date: "2024-01-05",
      url: BLOGGER_URL
    },
  ]

  return (
    <div className="py-12 px-4 min-h-full">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Blog</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Latest Articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights on earning online, digital strategies, and tips for financial success.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Post Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-primary/40" />
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-1 text-sm text-primary font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* View All Posts Button */}
        <div className="text-center">
          <a
            href={BLOGGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            <ExternalLink className="w-5 h-5" />
            View All Posts on Blogger
          </a>
        </div>
      </div>
    </div>
  )
}
