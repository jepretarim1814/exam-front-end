# Exam-front-end

### Table of contents
- [Instruction](#instruction)
- [Requirements](#requirements)
- [Installation](#installation)

### Instruction
1. Login Page
   1. NEVER use javascript validation or any validation on the FRONT END.
   2. All validation should be in the Back End API.
   3. Show errors of Back End below the text box.
2. Registration PAGE
   1. NEVER use javascript validation or any validation on the FRONT END.
   2. All validation should be in the Back End API.
   3. Show errors of Back End below the text box.
3. Logout LINK
   1. Destroy the token and return to login page.
4. User Page
   1. The data will show here is for LOGIN users.
   2. Use datatables on showing the list of users. The data should not be loaded all in the frontend. Browser will crash if 1 million data will load at once. It should be paginated. (https://datatables.net/examples/data_sources/server_side.html)
5. WP Users Page (OPTIONAL)
   1. The data will show here is for LOGIN users.
   2. Use datatables on showing the list of wp users. The data should not be loaded all in the frontend. Browser will crash if 1 million data will load at once. It should be paginated. (https://datatables.net/examples/data_sources/server_side.html)
   
### Requirements
1. The Front End should be separate from API
2. You can use vuejs or any framework you are familiar with.
3. If login, the token will automatic refresh if the TTL is reach to 5mins (YES 5 mins), since the TTL is 10 mins. Upon refreshing, the current token will be destoryed and replace with the new one.

### Instruction
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
