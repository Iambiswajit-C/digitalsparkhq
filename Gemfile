# frozen_string_literal: true

source "https://rubygems.org"

# GitHub Pages gem handles most dependencies
gem "github-pages", group: :jekyll_plugins

# SEO & sitemap plugins
gem "jekyll-sitemap"
gem "jekyll-seo-tag"

# Optional: if you want to minify HTML, CSS, JS for faster load
gem "jekyll-minifier"

# Windows users may need this for event notifications
gem "wdm", "~> 0.1", platforms: [:mingw, :mswin, :x64_mingw]

group :jekyll_plugins do
  gem "jekyll-feed"        # generates RSS feed
  gem "jekyll-paginate"    # for blog pagination if needed
end
