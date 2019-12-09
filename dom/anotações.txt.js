v-on = @
v-bind = :
//desligar e ligar uma variavel
@click="variable = !variable"


//To push all branches to all remotes:

git remote | xargs -L1 git push --all

//Or if you want to push a specific branch to all remotes:

//Replace master with the branch you want to push.

git remote | xargs -L1 -I R git push R master

//(Bonus) To make a git alias for the command:

git config --global alias.pushall '!git remote | xargs -L1 git push --all'

//Running git pushall will now push all branches to all remotes.

