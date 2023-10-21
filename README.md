# Projeto WEB & NAT

Este projeto é um site em PHP e Javascript simples que mostra o uso atual de CPU e RAM do servidor em que está rodando. Em sua implementação de teste ele usa o Apache como servidor web e o ngrok para expor o servidor à internet.

O servidor de teste pode ser acessado quando ativo pela rota:

```
accurate-entirely-ostrich.ngrok-free.app
```

## Objetivo

O objetivo deste projeto é demonstrar o uso de um Web Server e de um serviço de tunelamento para expor o servidor à internet. O uso de um serviço de tunelamento é necessário pois o servidor de teste está rodando em uma rede local e não possui um IP público. O serviço de tunelamento permite que o servidor seja acessado por meio de um URL público e que o tráfego seja redirecionado para o servidor local.

## Requisitos

- PHP 7.0 ou superior
- Servidor web Apache
- conta ngrok

## Instalação

1. Clone este repositório para o seu servidor.
2. Instale o Apache e o PHP no seu servidor se ainda não estiverem instalados.
3. Instale o ngrok e autentique a sua conta.
4. Inicie o ngrok e exponha o seu servidor Web local na porta 80.
5. Navegue até o URL do ngrok no seu navegador da Web para ver o uso da CPU e da RAM.

## Utilização

O script PHP exibirá automaticamente o uso atual da CPU e da RAM quando acessado por meio de um navegador da Web.
