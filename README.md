# nave-rs

## Requisitos

- Package manager: Yarn/Npm;
- Expo CLI(https://docs.expo.io/workflow/expo-cli/);
- Expo Client(https://expo.io/tools#client);
- React Native(https://reactnative.dev/docs/getting-started);

## Passos

- Ao baixar o projeto, use o yarn/npm para instalar as dependências do projeto;
- Após o passo acima, dê um start na aplicação: 'expo start'/'yarn start';
- Ao abrir a página no navegador com a instância em execução, escolha por onde deseja usar o cliente:
  - Emulador: 
    - Android Studio(https://developer.android.com/studio).
  - Dispositivo físico:
    - Expo Client(instale pela playstore, entre no 'Expo' e escaneie o 'QR Code' do navegador).
    
## Features    
    
### Adicionar naver

- Os campos: 'nome', 'cargo', 'projetos que participou', 'url' são string
  - Exemplo: Caio, Manager, Projeto Viver, www.urlwhatever.com.br/nadanao

- Os campos: 'idade' e 'tempo de empresa' são do tipo *date*, no formato: dd/mm/yyyy.
  - Exemplo: 22/09/1989.

### Editar cadastro

- Para editar os dados é preciso alterar pelo menos um caractere em cada campo devido a obrigatoriedade da api.

### Excluir cadastro

- Basta dar um click no ícone da lixeira, confirmar ou cancelar a ação.

### Sair/Logout

- Basta dar um click no ícone no canto esquerdo superior.
   
## Observações

### Imagem do avatar

- Não é preciso fornecer imagem no campo URL da imagem, segundo o exemplo da api apenas uma url string.
- A imagem é a mesma para todos os cadastros, seguindo as medidas do layout proposto.
- A url da img ficou setada com endereço de uma foto profile apenas para preencher o campo.

### Dificuldades

- Autenticação foi bem simples apenas para permitir o user utilizar as funções.
- Para notificação usei do Alert em vez do Modal, não consegui aplicar a ideia do modal adequadamente.
