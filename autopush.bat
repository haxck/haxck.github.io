@echo off
git add src/data/blog/*
git commit -m "new post %date%"
git push origin astro
