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


  def self.realEstateFeed
    url = "http://www.capitalanalyticsassociates.com/category-real-estate/feed/"
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
    url = "http://www.capitalanalyticsassociates.com/category-health/feed/"
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
