@echo off
:: use ' start explorer "http://127.0.0.1:8080" ' to open with default browser

echo Opening Chrome to port 8080...
start chrome "http://127.0.0.1:8080"
http-server .