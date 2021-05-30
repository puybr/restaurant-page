# Restaurant Page - [Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page)
Additional steps to take when deploying a subfolder to Github Pages:
1. `git add dist && git commit -m "Initial dist subtree commit"`
2. `git subtree push --prefix dist origin gh-pages`