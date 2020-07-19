## Projeto criado como teste de competencia para Grupo Boticario - Miniblog boticario

- Versão React: </br>

  - react - 16.11.0 </br>
  - react-native - 0.62.2 </br>

- Utilizado </br>

  - React </br>
    - Classe Component </br>
    - Hooks </br>
    - Redux </br>
    - Axios </br>
    - Flipper </br></br>
  - Firebase </br>
    - Auth  </br>
    - Database </br>
  

<p>Requisitos de mobile:</p> 

•	Tela de splash screen com informações sobre você, fique à vontade pra apresentar seu nome, e-mail uma foto divertida sua J. Mas se quiser só colocar uma logo do seu produto, tá valendo ;) </br>
•	Tela de login para informar e-mail e senha;</br>
•	Tela de cadastro de um novo usuário solicitando nome, e-mail e senha;</br>
•	Tela para listar postagens de até 280 caracteres, exibindo nome da pessoa que postou, data do post e texto do post;</br>
•	Tela para listar as últimas novidades do Boticário. </br>
•	Tela para fazer um novo post solicitando apenas um campo de texto;</br>
•	Possibilidade de editar e excluir um post próprio que foi publicado.</br>
•	Ao logar no app, na tela pela vez deverá trazer alguns posts (fake) de seus colegas;</br>


* <b>Após baixar do git </B> </Br>
  - yarn install </br>
* Rodando a aplicacao:</br>
   
  - npx react-native run-ios </br> 
  Ou </br>
  Usando Flipper</br>
  - yarn ios

* Para rebuildar a aplicacao caso esteja com problemas: </br>
  - watchman watch-del-all && rm -rf node_modules && yarn install && yarn start --reset-cache && rm -rf /tmp/metro-\* </br>

</br>
<b> Funcionamento aplicativo</b></br></br>
  - Aplicativo tem funcionamento simples, faz criacao e autententicacao usando firebase , consumo de noticias eh feito atraves do link:  https://gb-mobile-app-teste.s3.amazonaws.com/data.json , o salvamento do dos dados do blog eh feito no firebase database

</br></br>
</br></br>


<b>Nota do programador:</b> </br></br>
Run-> pod install
yarn add react-native-gesture-handler react-native-reanimated react-native-screens redux-thunk redux redux-logger react-native-router-flux react-redux lodash axios @aws-amplify/core crypto-js@3.3.0 moment-timezone native-base react-native-keyboard-aware-scroll-view react-native-reanimated react-native-responsive-fontsize react-native-router-flux react-native-screens redux-persist
@react-native-community/async-storage

senha: 123456789
alias: boticario

- PARA GERAR BUILD POR COMANDO 
https://facebook.github.io/react-native/docs/signed-apk-android.html
- Gerar apk 
- entrar na pastar 
  /android e rodar o comando 
  --    ./gradlew assembleRelease
react-native run-android --variant=release

cd android && ./gradlew assembleRelease

  o build apk fica na pasta 
  android/app/build/outputs/apk/app-release.apk

  react-native run-ios --simulator="iPhone Xs Max"

  xcrun simctl list --json devices
  
