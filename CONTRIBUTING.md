# Contribuindo para granatonatilia.github.io

Obrigada por seu interesse em contribuir com meu site portfolio! Este documento descreve o processo e as diretrizes para contribuição.

## 🚀 Como Contribuir

### 1. Processo Issue-First
**⚠️ IMPORTANTE**: Todo PR deve estar relacionado a uma issue existente.

1. **Primeiro, crie ou encontre uma issue** que descreva o problema ou funcionalidade
2. **Discuta a implementação** na issue antes de começar o trabalho
3. **Referencie a issue no PR** usando `Fixes #issue-number` ou `Closes #issue-number`

### 2. Workflow de Desenvolvimento

1. **Fork** o repositório
2. **Crie uma branch** com nome descritivo: `feature/nova-funcionalidade` ou `fix/corrigir-bug`
3. **Faça suas mudanças** seguindo as diretrizes de código
4. **Teste localmente** as mudanças
5. **Commit** suas mudanças com mensagens claras
6. **Abra um PR** referenciando a issue relacionada

### 3. Diretrizes de Código

#### HTML
- Use HTML5 semântico (`<main>`, `<section>`, `<article>`, etc.)
- Inclua atributos de acessibilidade (`aria-label`, `role`, etc.)
- Mantenha indentação consistente (4 espaços)
- Use nomes de classe descritivos em inglês

#### CSS
- Use CSS custom properties (variáveis CSS) para temas
- Siga convenção BEM-like para nomes de classes
- Organize estilos em seções lógicas com comentários
- Use CSS moderno (Grid, Flexbox, custom properties)
- Abordagem mobile-first para design responsivo
- Suporte para tema claro e escuro via `[data-theme]`

#### JavaScript
- Use sintaxe ES6+ moderna
- JavaScript vanilla (sem frameworks)
- Nomes descritivos para funções e variáveis
- Comentários em inglês para código, português para conteúdo
- Implemente recursos de acessibilidade

### 4. Estrutura do Projeto

```
├── index.html          # Estrutura HTML principal
├── styles.css          # Todos os estilos CSS
├── script.js           # Funcionalidade JavaScript
├── favicon.svg         # Ícone do site
├── CNAME              # Configuração de domínio customizado
└── .github/           # Templates e configurações do GitHub
    ├── ISSUE_TEMPLATE.md
    └── PULL_REQUEST_TEMPLATE.md
```

### 5. Testando Suas Mudanças

Antes de abrir um PR, certifique-se de que:
- [ ] O site funciona corretamente no modo claro e escuro
- [ ] Os controles de tamanho de fonte funcionam
- [ ] O design é responsivo em diferentes dispositivos
- [ ] Não há erros no console do navegador
- [ ] A acessibilidade foi preservada/melhorada

### 6. Tipos de Contribuição

#### 🐛 Correção de Bugs
- Reporte bugs através de issues com informações detalhadas
- Inclua screenshots e informações do ambiente
- Descreva passos para reproduzir o problema

#### ✨ Novas Funcionalidades
- Discuta novas funcionalidades através de issues primeiro
- Considere a simplicidade e minimalismo do design
- Garanta compatibilidade com o tema existente

#### 📚 Documentação
- Melhorias na documentação são sempre bem-vindas
- Mantenha a linguagem clara e concisa
- Use português para documentação voltada ao usuário

#### 🎨 Melhorias de Design
- Mantenha a estética minimalista inspirada no Vercel
- Preserve a funcionalidade de acessibilidade existente
- Teste em diferentes navegadores e dispositivos

### 7. Diretrizes de Commit

Use mensagens de commit claras e descritivas:
- `feat: adiciona nova funcionalidade X`
- `fix: corrige problema com Y`
- `docs: atualiza documentação sobre Z`
- `style: melhora aparência de W`
- `refactor: refatora código de V`

### 8. Code Review

Todos os PRs passam por revisão. Durante o processo:
- Seja respeitoso e construtivo nos comentários
- Responda aos feedbacks de forma clara
- Faça as mudanças solicitadas quando apropriado
- Teste novamente após fazer alterações

## 🆘 Precisa de Ajuda?

Se você tem dúvidas sobre como contribuir:
1. Verifique as issues existentes para ver se sua dúvida já foi respondida
2. Crie uma nova issue com sua pergunta
3. Use o label `question` para facilitar a identificação

## 📝 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto.

---

**Lembre-se**: A regra mais importante é **sempre criar ou referenciar uma issue antes de abrir um PR**. Isso ajuda a manter um histórico claro do desenvolvimento e facilita a discussão sobre mudanças propostas.

Obrigada por contribuir! 🚀