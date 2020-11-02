# Google Web Speech API Automation
This short script was written to help automate the transcription of recorded university lectures, but you can transcript pretty much whatever as long as it's loud enough for your machine's mic to capture.
The script is necessary as [Google Web Speech API Demonstration](https://www.google.com/intl/it/chrome/demos/speech.html) is just a demo and does not record for very long, after a brief amount of time restarting the recording procedure is necessary. As long as the site is up running and nothing changes this should be usable.
## Setup
All this script uses is Python3 with Selenium. Refer to [their documentation](https://selenium-python.readthedocs.io/installation.html).
Brief version for the lazy: install Google Chrome Browser (which is the only one supported by the target website) and corresponding version [chromedriver](https://sites.google.com/a/chromium.org/chromedriver/downloads).
