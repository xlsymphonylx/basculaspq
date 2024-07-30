#!/bin/bash

# Exit on error
set -e

# Define paths
SRC_DIR="/projects/basculaspq/front-basculas/dist/"
DEST_DIR="/projects/basculaspq/prod-front-basculas/"

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
    git commit -m 'equisde desde linux'

    echo "Pushing to origin master..."
    git push origin master
else
    echo "Error: Destination directory is not a Git repository."
    exit 1
fi

echo "Deployment complete."