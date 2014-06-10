xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Is it just me or...?"
    xml.description "A blog about software and chocolate"
    xml.link posts_url

    for post in @posts
      xml.item do
        xml.title post.title
        xml.description post.body
        xml.pubDate post.created_at.to_s(:rfc822)
        xml.link user_posts_url(user, post)
        xml.guid user_posts_url(user, post)
      end
    end
  end
end
