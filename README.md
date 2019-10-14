This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Getting started

## Gloning this repo the right way
1. go to github and create a new repo 
2. clone the new empty repo `git clone my_new_repo_url`
3. `cd my_new_repo`
4. add this repo as a remote `git remote add whitelabel https://github.com/pondsthlm/whitelabel-frontend.git`
5. fetch latest `git fetch whitelabel`
6. merge the new repo with this boiler code from the whitelabel remote. `git merge whitelabel/master`if there is a problem use `git merge --allow-unrelated-histories whitelabel/master`
7. consider removing the remote `git remote remove whitelabel`

## Cleanup boliercode 
1. Go into package.json and change the "name" from  "ecwhitelabelfontend" to whatever.
2. Replace cms sanity paths to correct sanity instance. ( #todo write how )
3. Update social icons `components/Seo/icons`.


# Deploy!
Once for each new repo run `npm run create` this will setup a new app on heroku

Once from every developers computer  run `npm run deploy-init` this till add a heroku remote to the computer 

Now you can deploy! 'npm run deploy' after successfull deployment
go to https://yourappname.herokuapp.com to see the result.


# easy and accessibility routing
uses reach router instead of react router
https://reach.tech/router

# no redux 
uses a redux like implimitation of the official react context api,
keep the reducer 
useStore gives the store and actions directly, 
no need to mapDispatch, mapState, connect, over and over again,  just use: 
`const { state, actions } = useStore();`
compatible with ,redux devtools.

redux devtools  is coming... 

## TODO 
sync manifest.json to seo component and autogenerate it. 
