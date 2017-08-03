#!/bin/bash

git submodule update --init
bundle install --path vendor/bundle
bundle exec jekyll build
#bundle exec htmlproofer ./_site
