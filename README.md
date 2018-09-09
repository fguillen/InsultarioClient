# insultario-client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### To deploy

We have to have `/dist` folder to be pushed to the repo

```
git co heroku
git rebase master
npm run build
git add .
git commit -m "dist"
git push -f heroku HEAD:master
git co master
```
