# object_oriented_js
Project create for program Philips Full Stack developer from Digital innovatio One

# Orientação a Objetos

Este repositório contém a atividade prática do Curso "Orientação a Objetos", que faz parte do Basecamp de Javascript pela [Digital Innovation One](https://digitalinnovation.one/) ministrado por [Stephany Nush](https://github.com/stebsnusch).

# Object orientation

This repository contains the practical activity of the "Object Orientation" Course, which is part of the Javascript Basecamp by [Digital Innovation One](https://digitalinnovation.one/) taught by [Stephany Nush](https://github. com/stebsnusch).

## Atividade: Conta Bancária

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1. Crie a classe `ContaBancaria`, que possui os parâmetros `agencia`, `numero`, `tipo` e `saldo`;
2. Dentro de `ContaBancaria`, construa o getter e o setter de `saldo`;
3. Dentro de `ContaBancaria`, crie os métodos `sacar` e `depositar`;
4. Crie uma classe-filha chamada `ContaCorrente` que herda todos esses parâmetros e ainda possua o parâmetro `cartaoCredito`;
5. Ainda em `ContaCorrente`, construa o getter e o setter de `cartaoCredito`;
6. Ainda em `ContaCorrente`, faça com que o `tipo` seja 'conta corrente' por padrão;
7. Crie uma classe-filha chamada `ContaPoupanca` que herda todos os parâmetros de `ContaBancaria`;
8. Crie uma classe-filha chamada `ContaUniversitaria` que herda todos os parâmetros de `ContaBancaria`;
9. Faça com que o método `saque` de `ContaUniversitaria` apenas seja capaz de sacar valores **menores que 500 reais**.

## Activity: Bank Account

In this activity, we will test Object Oriented concepts by simulating the creation of different types of bank accounts and operations available in each one.

1. Create the `Bank Account` class, which has the parameters `agency`, `number`, `type` and `balance`;
2. Inside `BankAccount`, build the `balance` getter and setter;
3. Inside `BankAccount`, create the `withdraw` and `deposit` methods;
4. Create a child class called `AccountCurrent` that inherits all these parameters and still has the `Creditcard` parameter;
5. Still in `ContaCredito`, build the getter and setter of `Creditcard`;
6. Still in `Account`, make the `type` 'current account' by default;
7. Create a child class called `SavingsAccount` that inherits all parameters of `BankAccount`;
8. Create a child class called `University Account` that inherits all parameters of `Bank Account`;
9. Make the `withdrawal` method of `ContaUniversitaria` only be able to withdraw amounts **less than 500 dollars**.