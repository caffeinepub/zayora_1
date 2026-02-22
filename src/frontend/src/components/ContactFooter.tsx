import { Mail, Phone, Heart } from 'lucide-react';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'zayora-app';

  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-orange-600">ZAYORA</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              Founded by Yash Jaiswal
            </p>
            <p className="text-sm text-muted-foreground">
              Premium Bluetooth earbuds and smartwatches for the modern lifestyle
            </p>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:9919031626"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-orange-600"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                  <Phone className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Customer Care</div>
                  <div className="font-medium text-foreground">9919031626</div>
                </div>
              </a>
              
              <a
                href="mailto:zayora11@gmail.com"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-orange-600"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
                  <Mail className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">zayora11@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-muted-foreground transition-colors hover:text-orange-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground transition-colors hover:text-orange-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="flex flex-wrap items-center justify-center gap-1">
            <span>© {currentYear} Zayora. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 fill-orange-500 text-orange-500" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-orange-600 hover:underline"
              >
                caffeine.ai
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
