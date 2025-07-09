@echo off
cd /d D:\project\haxck.github.io\
git add src/data/blog/*
git commit -m "new post %date%"
git push origin astro
