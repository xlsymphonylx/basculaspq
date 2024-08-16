#!/bin/bash

# Exit on error
set -e

# Define paths
SRC_DIR="/projects/basculaspq/frontend/dist/"
DEST_DIR="/projects/basculaspq/prod/"
FRONTEND_DIR="/projects/basculaspq/frontend"

# Get the current git user
git_user=$(git config user.name)
current_date=$(date '+%Y-%m-%d %H:%M:%S')

# First, commit changes in the frontend directory
echo "Navigating to frontend directory..."
cd "$FRONTEND_DIR"

# Check if the frontend directory is a git repository
if [ -d ".git" ]; then
  echo "Git repository found in frontend directory."
  echo "Adding changes..."
  git add .

  echo "Please enter the commit body (leave empty for none):"
  read commit_body

  echo "Committing changes..."
  if [ -z "$commit_body" ]; then
    git commit -m "Automated Git Push into master"
  else
    git commit -m "Automated Git Push into master" -m "$commit_body"
  fi

  echo "Pushing to origin master..."
  git push origin master
else
  echo "Error: Frontend directory is not a Git repository."
  exit 1
fi

# Now proceed with the rest of the script
# Build the project
echo "Building the project..."
vue-cli-service build

# Sync files to destination, excluding .git directory
echo "Syncing files to destination..."
sudo rsync -av --delete --exclude='.git' "$SRC_DIR" "$DEST_DIR"

# Navigate to destination directory
echo "Navigating to destination directory..."
cd "$DEST_DIR"

# Check if the destination directory is a git repository
if [ -d ".git" ]; then
  echo "Git repository found. Adding changes..."
  git add .

  echo "Committing changes..."
  git commit -m "Automated Git Push from $git_user $current_date"

  echo "Pushing to origin master..."
  git push origin master
else
  echo "Error: Destination directory is not a Git repository."
  exit 1
fi

echo "Deployment complete."

