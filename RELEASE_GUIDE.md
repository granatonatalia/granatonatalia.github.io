# Guia: Como Criar a Release v1.0.0

Este documento fornece instruções passo a passo para criar a primeira release oficial do portfolio.

## 📋 Pré-requisitos

Todo o conteúdo necessário já foi preparado e commitado:
- ✅ `CHANGELOG.md` - Histórico de mudanças
- ✅ `RELEASE_NOTES_v1.0.0.md` - Notas detalhadas da release

## 🚀 Método 1: Via Interface Web do GitHub (Recomendado)

### Passo 1: Acessar a Página de Releases
1. Acesse: https://github.com/granatonatalia/granatonatalia.github.io/releases
2. Clique no botão **"Draft a new release"** (ou "Create a new release")

### Passo 2: Configurar a Release
1. **Tag version**: Digite `v1.0.0`
   - O GitHub criará automaticamente a tag quando a release for publicada
2. **Target**: Selecione a branch `main` (ou a branch principal do repositório)
3. **Release title**: Digite `v1.0.0 - Portfolio Website Natalia Granato`
4. **Description**: Copie e cole o conteúdo do arquivo `RELEASE_NOTES_v1.0.0.md`

### Passo 3: Opções Adicionais
- ✅ Marque **"Set as the latest release"** (já que é a primeira release)
- ⚠️ NÃO marque "This is a pre-release" (esta é uma release estável)

### Passo 4: Publicar
1. Clique no botão **"Publish release"**
2. Aguarde a confirmação
3. A release estará disponível em: https://github.com/granatonatalia/granatonatalia.github.io/releases/tag/v1.0.0

## 🔧 Método 2: Via GitHub CLI (Alternativo)

Se você tem o GitHub CLI instalado e autenticado:

```bash
# 1. Fazer checkout da branch principal
git checkout main

# 2. Garantir que está atualizado
git pull origin main

# 3. Criar a release
gh release create v1.0.0 \
  --title "v1.0.0 - Portfolio Website Natalia Granato" \
  --notes-file RELEASE_NOTES_v1.0.0.md \
  --latest
```

## 🔧 Método 3: Via Git + GitHub CLI (Manual)

Se preferir criar a tag manualmente primeiro:

```bash
# 1. Criar a tag localmente
git tag -a v1.0.0 -m "Release v1.0.0 - Portfolio Website"

# 2. Push da tag para o GitHub
git push origin v1.0.0

# 3. Criar a release no GitHub
gh release create v1.0.0 \
  --title "v1.0.0 - Portfolio Website Natalia Granato" \
  --notes-file RELEASE_NOTES_v1.0.0.md \
  --latest
```

## ✅ Verificação

Após criar a release, verifique:

1. **Tag criada**: https://github.com/granatonatalia/granatonatalia.github.io/tags
2. **Release publicada**: https://github.com/granatonatalia/granatonatalia.github.io/releases
3. **Release aparece como "Latest"**: Deve ter um badge verde "Latest"
4. **Notas de release**: Verifique se as notas estão formatadas corretamente

## 📝 Próximos Passos

Após criar a release:

1. **Atualizar README.md** (se necessário):
   - Adicionar badge da release: `![GitHub release](https://img.shields.io/github/v/release/granatonatalia/granatonatalia.github.io)`

2. **Compartilhar**:
   - Twitter/LinkedIn: Anunciar a primeira release
   - README do perfil no GitHub

3. **Manter CHANGELOG.md atualizado**:
   - Para futuras mudanças, adicionar novas seções no CHANGELOG
   - Seguir o formato [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/)

## 🔮 Futuras Releases

Para próximas releases, siga o [Versionamento Semântico](https://semver.org/lang/pt-BR/):

- **MAJOR** (X.0.0): Mudanças incompatíveis na API/estrutura
- **MINOR** (1.X.0): Novas funcionalidades (compatível com versões anteriores)
- **PATCH** (1.0.X): Correções de bugs

Exemplos:
- `v1.1.0` - Adicionar nova seção de blog
- `v1.0.1` - Corrigir bug no modo escuro
- `v2.0.0` - Reestruturação completa do site

## ❓ Problemas Comuns

### "Tag já existe"
Se a tag `v1.0.0` já existir, você pode:
- Usar outra versão (ex: `v1.0.1`)
- Ou deletar a tag existente (se não estiver em uso):
  ```bash
  git tag -d v1.0.0
  git push origin :refs/tags/v1.0.0
  ```

### "Branch não encontrada"
Certifique-se de que está na branch correta e que ela está sincronizada:
```bash
git checkout main
git pull origin main
```

---

**Nota**: Este guia foi preparado automaticamente como parte da issue de criação de release do projeto.
