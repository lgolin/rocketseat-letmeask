# O que e o React? 
O React é um framework popular do JavaScript para a criação de aplicativos front-end. 
Originalmente criado pelo Facebook, ganhou popularidade por permitir que os desenvolvedores criem aplicativos rápidos usando um paradigma de programação intuitivo que vincula o JavaScript com uma sintaxe parecida com o HTML chamada JSX.

# Firebase
O Firebase de Google é uma plataforma digital utilizada para facilitar o desenvolvimento de aplicativos web ou móveis, de uma forma efetiva, rápida e simples. Graças às suas diversas funções, é utilizado como uma técnica de Marketing Digital, com a finalidade de aumentar a base de usuários e gerar maiores benefícios econômicos. 

Seu principal objetivo é melhorar o rendimento dos apps mediante a implementação de diversas funcionalidades que farão do aplicativo um instrumento muito mais maleável, seguro e de fácil acesso para os usuários.

# Como adicionar o firebase no seu Projeto
https://firebase.google.com/docs/web/setup?hl=pt-BR

# Códigos de sorteio
  Dia 01: #together
  Dia 02: #unidade
  Dia 03: #embuscadeevolução
  Dia 04:
  Dia 05:

# Repasse de props
dentro de components > Buttons

# Aula 03_________________
# Autentificação & Autorização
  - Autentificação: verificar se o usuário está logado ou nao.
  - Autorização:  o que o usuário pode executar dentro da aplicação.

# Regras de autorização do Firebase

  [x] https://console.firebase.google.com/project/letmeask-77fd8/database/letmeask-77fd8-default-rtdb/rules
 {
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",  
          }
        }
      }
    }
  }
}


# React-hot-toast
https://react-hot-toast.com/