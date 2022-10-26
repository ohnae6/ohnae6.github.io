# CHLORIS
- git config --global user.email "7083620@hanmail.net"
- git config --global user.name "kaisa"
- nvm install
- cd chloris
- npm install
- npm run dev

# vite 로 설치 할 경우
- npm create vite@latest
- npm install
- npm run dev
- npm i vue-router@next
- rpm run build 빌드가 빠르다
- router 설치가중요
- axios 크로스도메인 TODO
- 


# import 경로에 @ 사용하고 싶을때 vite.config.js
- npm install path
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});
})
```

## lib dependencies
- "axios": "0.21.1"

## lib devDependencies
- 

## VS code
- ESlint 확장팩 설치 .eslintrc.js
# vue-cli 로 설치 할 경우

- 이건 window nvm 에서 꼬일수 있음(?)
- cmd 관리자권한
- nvm 설치  
- nvm ls
- nvm use 17.7.1
- npm uninstall vue-cli -g (2삭제)
- npm uninstall @vue/cli -g (2삭제)
- npm install -g @vue/cli (3설치) - @vue/cli@5.0.4
- vue create kaisa (vue3) - git bash 방향키 안됨? 
- 터미널에선 vue.cmd create kaisa (방향키 됨)
- npm install 
- npm run serve
- npm install gh-pages --save-dev

```
{
  "scripts": {
		// npm run hello를 실행하면, 콘솔에 world가 출력됩니다
      "hello": "echo world"
  }
}
```
