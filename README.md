# notorious
A React-based web application designed to display class notes in an intuitive, readable, and hypertextual manner.

I've still got a long ways to go to implement my original design, but you can view the work in progress now at www.paulrudmik.com/notorious!

If the website happens to be down, or you want to get a version of it running yourself, you can also run it locally. To set up a fresh version of the repository:

```
git clone https://github.com/PaulMHR/notorious.git
cd notorious
git clone https://github.com/PaulMHR/markdown-editor.git
mv markdown-editor/ src/components/editor
npm install # install all the modules the app needs that you don't have
npm start   # host the site at http://localhost:3000
```

If you already have a copy of this module on your machine, you can update and run the site:

```$xslt
cd notorious
git pull origin master
npm install
npm start
```

If you ever notice any problems with this (that aren't simply things not being done yet!) feel free to leave me an issue and I'll get back to you as soon as possible.