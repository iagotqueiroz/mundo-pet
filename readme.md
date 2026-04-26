# 🐶 Mundo Pet — Sistema de Agendamento

Projeto desenvolvido com o objetivo de praticar lógica de programação, organização de código e integração com API.

## 🚀 Sobre o projeto

O **Mundo Pet** é um sistema de agendamento para pet shop, onde é possível:

- Criar agendamentos
- Validar horários disponíveis
- Evitar conflitos de atendimento
- Visualizar agendamentos por período (manhã, tarde e noite)
- Remover agendamentos em tempo real

---

## 🧠 Principais aprendizados

Durante o desenvolvimento, foram trabalhados conceitos importantes como:

- Manipulação de DOM
- Organização de código em módulos
- Uso de funções assíncronas (`async/await`)
- Integração com API (JSON Server)
- Validação de horários e intervalos
- Event delegation (eventos dinâmicos)
- Uso de bibliotecas como **dayjs**
- Configuração de ambiente com **Webpack**

---

## ⚙️ Tecnologias utilizadas

- HTML
- CSS
- JavaScript (ES Modules)
- Webpack
- JSON Server
- Day.js

---

## 📅 Funcionalidades

### ✔ Criação de agendamento
- Cadastro de pet, tutor, serviço, data e horário

### ✔ Validação de horário
- Impede agendamentos duplicados
- Evita conflitos de intervalo

### ✔ Organização por período
- Manhã
- Tarde
- Noite

### ✔ Remoção de agendamento
- Remoção da interface
- Remoção sincronizada com a API

---

## 🔌 API (JSON Server)

O projeto utiliza o JSON Server para simular uma API.

### ▶ Rodar a API:

```bash
npx json-server server.json --watch