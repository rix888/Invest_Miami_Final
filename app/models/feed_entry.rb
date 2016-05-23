class FeedEntry < ActiveRecord::Base
  def self.update_from_feed(feed_url)
    Feedjira::Feed.add_common_feed_entry_element("img", :as => :image)
    feed = Feedjira::Feed.fetch_and_parse(feed_url)
    feed.entries.each do |entry|
      unless exists? :guid => entry.id
        create!(
        :content        => entry.content,
        :name           => entry.title,
        :summary        => entry.summary,
        :url            => entry.url,
        :published_at   => entry.published,
        :guid           => entry.id,
        )
      end
    end
  end

  def self.landingFeed
    url = "http://www.investdoral.com/feed/"
    feed_url = url
    feed = Feedjira::Feed.fetch_and_parse(feed_url)
    feed.entries.each do |entry|
      unless exists? :guid => entry.id
        create!(
        :name           => entry.title,
        :summary        => entry.summary,
        :url            => entry.url,
        :published_at   => entry.published,
        :guid           => entry.id,
        )
      end
    end
  end

  def self.realEstateFeed
    url = "http://www.investdoral.com/category/real-estate/feed/"
    feed_url = url
    feed = Feedjira::Feed.fetch_and_parse(feed_url)
    feed.entries.each do |entry|
      unless exists? :guid => entry.id
        create!(
        :name           => entry.title,
        :summary        => entry.summary,
        :url            => entry.url,
        :published_at   => entry.published,
        :guid           => entry.id,
        )
      end
    end
  end


  def self.healthFeed
    url = "http://www.investdoral.com/category/real-estate/feed/"
    feed_url = url
    feed = Feedjira::Feed.fetch_and_parse(feed_url)
    feed.entries.each do |entry|
      unless exists? :guid => entry.id
        create!(
        :name           => entry.title,
        :summary        => entry.summary,
        :url            => entry.url,
        :published_at   => entry.published,
        :guid           => entry.id,
        )
      end
    end
  end

  def self.economyFeed
    url = "http://www.investdoral.com/category/economy/feed/"
    feed_url = url
    feed = Feedjira::Feed.fetch_and_parse(feed_url)
    feed.entries.each do |entry|
      unless exists? :guid => entry.id
        create!(
        :name           => entry.title,
        :summary        => entry.summary,
        :url            => entry.url,
        :published_at   => entry.published,
        :guid           => entry.id,
        )
      end
    end
  end

  def self.constructionFeed
    url = "http://www.investdoral.com/category/construction/feed/"
    feed_url = url
    feed = Feedjira::Feed.fetch_and_parse(feed_url)
    feed.entries.each do |entry|
      unless exists? :guid => entry.id
        create!(
        :name           => entry.title,
        :summary        => entry.summary,
        :url            => entry.url,
        :published_at   => entry.published,
        :guid           => entry.id,
        )
      end
    end
  end

end
