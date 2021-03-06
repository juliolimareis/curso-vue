# Curso-vue 
![VueIcon](dom/img/vuejs_logo.png)

#### Formas reduzidas
```html
<div v-on:click = @click>
<div v-bind:class = :class>
```

#### Spread operator
```js
function minhaFuncao(x, y, z) { }
var args = [0, 1, 2];
minhaFuncao(...args);
```

Desligar e ligar uma variavel
```html
<button @click="variable = !variable">
```

### Git Push all 
To push all branches to all remotes:

```sh
$ git remote | xargs -L1 git push --all
```

Or if you want to push a specific branch to all remotes:

Replace master with the branch you want to push.

```sh
$ git remote | xargs -L1 -I R git push R master
```

(Bonus) To make a git alias for the command:

```sh
$ git config --global alias.pushall '!git remote | xargs -L1 git push --all'
```

Running git pushall will now push all branches to all remotes.

#### Pesquisar
```sh
vue-spritecore
```

### Curiosidades
* DOM(Document Object Model)
