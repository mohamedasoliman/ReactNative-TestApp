# ReactNative-TestApp
React native test application that fetch data from different URLs using Axios 

## Start

```bash
npm install
npm start
<!-- if expo cli is not installed run the following -->
npm install --global expo-cli
```

## :star: Decisions Made:
- The application was programmed using the React Native library by Expo CLI.
- Axios library was chosen to help make requests to the external links.
- The home page contains a list of the users obtained as well as their username, number, email, and website.
- After clicking on any user, the albums of the user (obtained using the User id) will be shown in the User's albums screen.
- When an album is chosen, photos related to the album will be returned as thumbnails (obtained by album id) and will be shown to the user.
- If any of the small thumbnails were clicked by the user, the thumbnail will then be shown (using a Modal) to the user. 
- The application has been tried on 2 different devices and simulators with different screen sizes to ensure good quality.


## Screenshots

![Test Image 1](https://github.com/mohamedasoliman/ReactNative-TestApp/blob/master/screenShots/homeScreen.png)

![Test Image 2](https://github.com/mohamedasoliman/ReactNative-TestApp/blob/master/screenShots/userAlbumsScreen.png)

![Test Image 3](https://github.com/mohamedasoliman/ReactNative-TestApp/blob/master/screenShots/thumbnails.png)

![Test Image 4](https://github.com/mohamedasoliman/ReactNative-TestApp/blob/master/screenShots/thumbnailBigSize.png)
