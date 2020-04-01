# mobile

- instalar expo de forma global
    - yarn global add expo-cli
- criar projeto mobile
    - expo init mobile
        - blank
- baixar app no celular chamado Expo
- podemos instalar o emulador de IOS e Android
- alteramos o name e slug do projeto no app.json
- alterando backgroundColor do Splash no app.json
- criação das pastas "/src/pages/Incidents" e "/src/pages/Detail"
    - index.js
    - styles.js
- criando navegação com base em consulta a documentação do próprio Expo
    - yarn add @react-navigation/native
    - expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
    - yarn add @react-navigation/stack
- criando routes.js
- importando routes.js no App.js
- montando componente Incidents
    - utilizando constantes dentro do arquivo css - styles.js
        - expo install expo-constants
- montando componente Detail
    - utilizando componente para envio de e-mail
        - expo install expo-mail-composer
    - utilizando deeplinking para fazer mensgem do Whatsapp funcionar
- conectando com API
    1. yarn add axios
    2. criar /src/services/api.js
    3. ajustar componente Incidents para chamar API
    4. yarn add intl
        - para realizar a internacionalização da moeda no Android
- implementando loading e paginação infinita

## conceitos
    - trabalhamos na estrutura somente com tag <View> e <Text>
    - estilos são sempre feitos inline
    - todos os elementos são display:flex por padrão
    - propriedades do css ficam em camelCase
    - não existe herança de estilos no React Native, cada elemento deve ser estilizado por conta
    - buscar informações sobre o Expo sempre na documentação oficial: https://docs.expo.io/versions/latest/guides/routing-and-navigation/

## deploy / gerar app

- youtube "Gerando APK (Android) e IPA (IOS) com React Native & Expo | Code/Drops #15"
    - IOS $99/mês para ter uma conta
    - Google $25/mês para ter uma conta