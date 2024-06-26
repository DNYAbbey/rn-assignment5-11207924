# rn-assignment5-11207924

## Bank App (Frontend Only)

This an app that allows a user track the payments or transactions made with his or her card.
- The app was built using react-native. It was built to primarily have to screens that can be navigated to using a bottom tab navigator. The screens are home screen and settings screen. Per the given design the my cards screen and statistics screen have no content.

- Each screen has a few custom component included in it. The home screen has the transaction option component and transaction component used in it. The transaction option component takes in two props; the icon and the name of the option. The transaction component on the other hand takes in four props; the icon, category, cost of transaction and name of transaction(what the money was spent on for example spotify).

- The settings screen uses one custom component, which takes in ope prop that is the name of the setting. This screen contains the theme switch which is used allow the user choose between dark theme and light theme, the light theme being the default.

- A useState hook was used to set the state of the themes. If the isDarkTheme is true then background color of the screens are changed,  the font colour of the texts is changed where necessary and white icons are used where needed.

## Screenshots of Application
![Home screen - light](PaymentApp/images/rn-5%20shot%201.PNG)
![Home screen - light](PaymentApp/images/rn-5%20shot%205.PNG)
![Settings screen - light](PaymentApp/images/rn-5%20shot%202.PNG)
![Home screen - dark](PaymentApp/images/rn-5%20shot%203.PNG)
![Settings screen - dark](PaymentApp/images/rn-5%20shot%204.PNG)