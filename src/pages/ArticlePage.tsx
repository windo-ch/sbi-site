import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getArticleBySlug, getAuthorById, Article, Author } from '@/lib/content';
import ArticleContent from '@/components/articles/ArticleContent';
import { useToast } from '@/hooks/use-toast';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [article, setArticle] = useState<Article | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) return;
      
      try {
        const articleData = await getArticleBySlug(slug);
        if (articleData) {
          setArticle(articleData);
          const authorData = await getAuthorById(articleData.author);
          setAuthor(authorData);
        } else {
          toast({
            title: "Article not found",
            description: "The requested article could not be found.",
            variant: "destructive"
          });
        }
      } catch (error) {
        console.error('Error loading article:', error);
        toast({
          title: "Error loading article",
          description: "There was an error loading the article. Please try again.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug, toast]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested article could not be found.</p>
          <Button asChild>
            <Link to="/intelligence">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Intelligence
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="swiss-section-sm bg-white border-b">
        <div className="swiss-grid">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link to="/intelligence" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Intelligence
              </Link>
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="secondary">{article.id}</Badge>
              <span>•</span>
              <span>Block #{article.blockHeight}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="swiss-section">
        <div className="swiss-grid">
          <ArticleContent article={article} author={author} />
        </div>
      </div>

      {/* Author Bio Section */}
      {author && (
        <div className="swiss-section bg-muted/30">
          <div className="swiss-grid">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-lg p-8 border">
                <div className="flex items-start gap-6">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{author.name}</h3>
                    <p className="text-muted-foreground mb-3">{author.role}</p>
                    <p className="text-sm leading-relaxed mb-4">{author.bio}</p>
                    
                    {author.expertise && author.expertise.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {author.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related Articles CTA */}
      <div className="swiss-section bg-background">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Explore More Intelligence</h3>
            <p className="text-muted-foreground mb-6">
              Discover more strategic insights and analysis from our research team.
            </p>
            <Button asChild size="lg">
              <Link to="/intelligence">
                View All Reports
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;