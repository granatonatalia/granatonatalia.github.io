# @project_context.md - Instruções para Cursor e Claude

## Visão Geral do Projeto

Este é um site de portfólio pessoal para **Natalia Granato**, desenvolvedora de software brasileira. O site apresenta suas experiências profissionais, habilidades, projetos e educação em um design limpo, acessível e moderno.

**URL atual do site:** https://nataliagranato.me/

![Screenshot do Website](https://github.com/user-attachments/assets/ed65b0d8-f3bc-4ae3-b4c9-64ff9635ffc5)

## Stack Tecnológico

- **Frontend**: HTML5 puro, CSS3, JavaScript (ES6+)
- **Design**: Design responsivo com CSS Grid e Flexbox
- **Funcionalidades**: Toggle dark/light mode, controles de acessibilidade, animações suaves
- **Hospedagem**: GitHub Pages
- **Idioma**: Conteúdo em português com comentários de código em inglês

## Estrutura de Arquivos

```
granatonatalia.github.io/
├── index.html              # Estrutura HTML principal
├── styles.css              # Todos os estilos CSS com suporte a temas
├── script.js               # Funcionalidade interativa
├── favicon.svg             # Ícone do site
├── README.md              # Descrição básica do projeto
├── CNAME                  # Configuração de domínio personalizado
├── .github/
│   └── copilot-instructions.md  # Instruções existentes do Copilot
└── @project_context.md    # Este arquivo (instruções para Cursor/Claude)
```

## Padrões de Código e Convenções

### HTML
- **Elementos semânticos**: Use `<main>`, `<section>`, `<header>`, `<footer>`
- **Acessibilidade**: Inclua atributos apropriados (`aria-label`, `role`, etc.)
- **Indentação**: 4 espaços consistentes
- **Classes**: Nomes descritivos em inglês
- **Meta tags**: Incluir tags para SEO e compartilhamento em redes sociais

**Exemplo de estrutura de seção:**
```html
<section class="section">
    <h2 class="section-title">Título da Seção</h2>
    <div class="section-content">
        <!-- Conteúdo aqui -->
    </div>
</section>
```

### CSS
- **Variáveis CSS**: Use propriedades customizadas para temas
- **Nomenclatura**: Convenção similar ao BEM para classes
- **Organização**: Estilos organizados em seções lógicas com comentários
- **Recursos modernos**: Grid, Flexbox, propriedades customizadas
- **Responsivo**: Abordagem mobile-first
- **Temas**: Suporte a modo claro e escuro via atributo `[data-theme]`
- **Tamanhos de fonte**: Variações através de classes no body

**Exemplo de variáveis de tema:**
```css
:root {
    --primary-color: #000000;
    --background-color: #ffffff;
    --text-primary: #000000;
    --accent-color: #0070f3;
    --transition: all 0.2s ease;
}

[data-theme="dark"] {
    --primary-color: #ffffff;
    --background-color: #09090b;
    --text-primary: #ffffff;
    --accent-color: #3b82f6;
}
```

### JavaScript
- **Sintaxe**: ES6+ moderno
- **Framework**: JavaScript puro (sem frameworks)
- **Event listeners**: Dentro do callback `DOMContentLoaded`
- **Nomenclatura**: Nomes descritivos para funções e variáveis
- **Funcionalidades**: Recursos de acessibilidade (controles de fonte, toggle de tema)
- **Armazenamento**: Preferências do usuário no localStorage
- **Animações**: Use intersection observers para animações de scroll

**Exemplo de funcionalidade de tema:**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
```

## Padrões de Design

### Sistema de Temas
- **Controle**: Atributo `data-theme` no `<html>`
- **Definição**: Variáveis CSS em `:root` e `[data-theme="dark"]`
- **Persistência**: Preferência salva no localStorage
- **Interface**: Botão toggle com ícones apropriados (🌙/☀️)

### Controles de Tamanho de Fonte
- **Controle**: Classes no body (`font-small`, `font-large`, `font-xl`)
- **Base**: Tamanho base definido com `--font-size-base`
- **Opções**: Pequeno, normal, grande e extra-grande

### Animações
- **Transições**: CSS para interações suaves
- **Scroll**: Intersection observer para animações ao entrar na viewport
- **Elementos**: Fade in e slide up quando visíveis
- **Hover**: Efeitos em elementos interativos

## Diretrizes de Conteúdo

### Idiomas
- **Português**: Todo conteúdo voltado ao usuário (títulos, descrições, labels)
- **Inglês**: Comentários de código, nomes de classes, nomes de funções
- **Bilíngue**: Meta tags SEO consideram ambos os idiomas

### Seções do Conteúdo
1. **Header**: Nome, título, informações de contato, controles de tema/fonte
2. **Sobre**: Breve descrição profissional
3. **Experiência**: Histórico de trabalho com empresa, cargo, período e conquistas
4. **Habilidades**: Habilidades técnicas categorizadas (Frontend, Backend)
5. **Projetos**: Projetos do portfólio com descrições e stack tecnológico
6. **Educação**: Formação acadêmica
7. **Footer**: Copyright e links adicionais

## Requisitos de Acessibilidade

- **ARIA labels**: Para todos os elementos interativos
- **Contraste**: Suficiente em ambos os temas
- **Navegação**: Suporte completo a teclado
- **Indicadores**: Focus visível para navegação por teclado
- **HTML semântico**: Estrutura apropriada para leitores de tela
- **Controles de fonte**: Para melhor legibilidade
- **Testes**: Considerar testes com leitores de tela

## Considerações de Performance

- **Imagens**: Otimizar e usar formatos apropriados
- **Minificação**: CSS e JavaScript quando necessário
- **Seletores**: CSS eficientes
- **Scroll suave**: Sem impacto na performance
- **Lazy loading**: Para imagens se adicionadas

## Melhores Práticas

### Design
- **Minimalismo**: Design limpo e profissional
- **Consistência**: Espaçamento e tipografia uniformes
- **Compatibilidade**: Cross-browser
- **Responsividade**: Teste em vários dispositivos
- **Validação**: HTML e CSS válidos
- **Padrões web**: Seguir as melhores práticas
- **Leveza**: Site rápido e leve

### Desenvolvimento
1. **Manter**: Linguagem de design e espaçamento existentes
2. **Animações**: Transições apropriadas
3. **Acessibilidade**: Compliance completa
4. **Temas**: Testar em modo claro e escuro
5. **Responsividade**: Verificar comportamento responsivo
6. **Conteúdo**: Atualizar conteúdo em português apropriadamente
7. **JavaScript**: Manter vanilla e leve

## Suporte a Navegadores

Foco em navegadores modernos com suporte ES6+:
- Chrome/Edge (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Navegadores móveis

## Comandos de Desenvolvimento

### Servidor Local
```bash
# Executar servidor HTTP simples
cd /caminho/do/projeto
python3 -m http.server 8000
# Ou
npx serve .
```

### Validação
```bash
# Validar HTML (se validator instalado)
html5validator index.html

# Lighthouse para performance
lighthouse http://localhost:8000 --output html --output-path report.html
```

## Deploy

O site é deployado automaticamente via GitHub Pages a partir da branch `main`. Qualquer mudança pushed para `main` será refletida no site ao vivo.

**URL de produção**: https://nataliagranato.me/

## Exemplos de Código Comuns

### Adicionar Nova Seção
```html
<section class="section">
    <h2 class="section-title">Nova Seção</h2>
    <div class="section-content">
        <p>Conteúdo da seção em português.</p>
    </div>
</section>
```

### Estilo para Nova Seção
```css
/* Nova Seção */
.nova-secao {
    margin-bottom: 32px;
}

.nova-secao-item {
    padding: 24px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--surface-color);
    transition: var(--transition);
}

.nova-secao-item:hover {
    box-shadow: var(--shadow);
    border-color: var(--accent-color);
}
```

### JavaScript para Interatividade
```javascript
// Adicionar efeito hover para novos elementos
const novosElementos = document.querySelectorAll('.novo-elemento');
novosElementos.forEach(elemento => {
    elemento.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    elemento.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
```

## Troubleshooting

### Fontes não carregam
- Verificar se o Google Fonts está acessível
- Fallback fonts estão definidos: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Tema não muda
- Verificar se `data-theme` está sendo definido no `<html>`
- Confirmar que variáveis CSS estão definidas para ambos os temas

### Animações não funcionam
- Verificar se Intersection Observer é suportado
- Confirmar que elementos têm opacity inicial 0 e transform translateY(20px)

## Contato e Manutenção

Para questões sobre este projeto, contactar:
- **Email**: contact@nataliagranato.me
- **GitHub**: https://github.com/granatonatalia
- **LinkedIn**: https://linkedin.com/in/nataliagranato

---
