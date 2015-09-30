require './app'
require 'rspec/core/rake_task'
require 'jasmine'
require 'jshintrb/jshinttask'

load 'jasmine/tasks/jasmine.rake'

desc 'js validation'
Jshintrb::JshintTask.new :jshint do |task|
  task.pattern = 'assets/javascripts/*.js'
  task.options = Jshintrb::Lint::DEFAULTS.merge({:predef => ['jQuery']})
end

RSpec::Core::RakeTask.new(:spec)

desc 'compile jsx for production'
task :compilejsx do
  `jsx --no-cache-dir assets/javascripts/app assets/javascripts/app.prod`
end

task :default=>[:spec, :jshint, :compilejsx]

