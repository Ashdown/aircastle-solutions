ENV['RACK_ENV'] = 'test'

require './app'
require 'capybara'
require 'capybara/rspec'

Capybara.app = Sinatra::Application

feature 'Capybara Test Application' do

  scenario "says Aircastle Solutions" do
    visit '/'

    expect(page).to have_text('Aircastle Solutions')
  end

end
