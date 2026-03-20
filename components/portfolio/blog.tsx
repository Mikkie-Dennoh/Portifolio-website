"use client"

import { ExternalLink, BookOpen, Calendar, ArrowRight } from "lucide-react"

// TODO: Replace with your actual Blogger blog posts
// You can either manually add posts here or use the Blogger API
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Web Development",
    excerpt: "Learn the fundamentals of web development and start your journey as a developer...",
    date: "2024-01-15",
    url: "YOUR_BLOGGER_POST_URL_HERE",
    image: "/placeholder-blog.jpg"
  },
  {
    id: "2", 
    title: "The Power of AI in Modern Design",
    excerpt: "Exploring how artificial intelligence is transforming the design industry...",
    date: "2024-01-10",
    url: "YOUR_BLOGGER_POST_URL_HERE",
    image: "/placeholder-blog.jpg"
  },
  {
    id: "3",
    title: "Tips for Effective Video Editing",
    excerpt: "Master the art of video editing with these professional tips and tricks...",
    date: "2024-01-05",
    url: "YOUR_BLOGGER_POST_URL_HERE",
    image: "/placeholder-blog.jpg"
  },
]

// Your Blogger blog URL - replace with your actual URL
const BLOGGER_URL = "YOUR_BLOGGER_BLOG_URL_HERE"

export function Blog() {
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
            Thoughts, tutorials, and insights on web development, design, AI, and creative technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Post Image Placeholder */}
              <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-muted-foreground/30" />
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

        {/* Setup Instructions */}
        <div className="mt-16 p-6 bg-card/50 border border-border rounded-xl">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            How to Connect Your Blogger Account
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p><strong className="text-foreground">What you need from your Blogger account:</strong></p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li><strong>Your Blog URL:</strong> Go to Blogger Dashboard → Settings → Basic → Publishing. Copy your blog address (e.g., yourblog.blogspot.com)</li>
              <li><strong>Individual Post URLs:</strong> For each post you want to feature, click on the post in Blogger → copy the URL from the browser address bar</li>
              <li><strong>Blog ID (optional for API):</strong> Found in your Blogger dashboard URL: blogger.com/blog/posts/<strong>YOUR_BLOG_ID</strong></li>
            </ol>
            <p className="pt-2">
              <strong className="text-foreground">To update this section:</strong> Edit the <code className="bg-secondary px-1 py-0.5 rounded">components/portfolio/blog.tsx</code> file and replace the placeholder URLs with your actual Blogger post URLs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
