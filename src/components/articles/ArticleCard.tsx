import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";
import { Article, Author } from "@/lib/content";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: Article;
  author?: Author;
}

const ArticleCard = ({ article, author }: ArticleCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Calendar className="w-4 h-4" />
          <span>{new Date(article.date).toLocaleDateString()}</span>
          <span>•</span>
          <span>Block {article.blockHeight}</span>
          <span>•</span>
          <Clock className="w-4 h-4" />
          <span>{article.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="text-sm text-muted-foreground">
              {author?.name || article.author}
            </span>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to={`/intelligence/${article.slug}`}>
                Read Full Report
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;