# Load the rails application
require File.expand_path('../application', __FILE__)

Sass::Plugin.options[:template_location] = "#{Rails.root}/app/sass"

# Initialize the rails application
BackboneDemo::Application.initialize!
