# Cache-bust main.css with a hash of the Sass sources, so returning visitors get new styles right after a deploy.
# jekyll-cache-bust's bust_css_cache hashes assets/_sass, which does not exist here, so its hash never changed.
require "digest/md5"

module Jekyll
  module SassCacheBust
    def bust_sass_cache(file_name)
      source = @context.registers[:site].source
      files = Dir[File.join(source, "_sass", "**", "*.scss")].sort
      files << File.join(source, "assets", "css", "main.scss")
      content = files.select { |f| File.file?(f) }.map { |f| File.read(f) }.join
      "#{file_name}?v=#{Digest::MD5.hexdigest(content)}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::SassCacheBust)
