# tmembers

Simple script to get the number of channel subscribers in the Telegram

## Installation
 
```sh
yarn add tmembers
```
 
Or if you prefer `npm`:
 
```sh
npm i tmembers
```
 
## Usage
 
### TL;DR
 
```js
import tmembers from 'tmembers'
 
tmembers('code_for', 1000).then(count => console.log(count));
```
 
### Docs
 
`tmembers` accepts two parameters — `channel` and `fallback`. If fetching will fail, it returns fallback value. Function returns Promise{number}.
 
That's all. Enjoy!
