//function toggleMode() {
// const html = document.documentElement
//html.classList.toggle("light") /*Alternar a classe "light" para mudar o tema*/
//const img =
// document.querySelector("#profile img") /*Selecionar a imagem do perfil*/
//if (html.classList.contains("light")) {
//img.setAttribute(
//"src",
//"./assets/avatar-light.png",
// ) /*Alterar a imagem para o tema claro*/
//} else {
//  img.setAttribute(
//  "src",
// "./assets/avatar.png",
//) /*Alterar a imagem para o tema claro*/
// }

// if (
// document.documentElement.classList.contains("light")
//) /*Verificar se o tema claro está ativo*/ {
// document.documentElement.classList.remove(
// "light",
//) /*Remover a classe "light" para ativar o tema escuro*/
//} else {
// document.documentElement.classList.add(
// "light",
// ) /*Adicionar a classe "light" para ativar o tema claro*/
//}*
//}

const THEME_KEY = "theme"

function applyTheme(theme) {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light", theme === "light")

  if (img) {
    img.setAttribute(
      "src",
      theme === "light" ? "./assets/avatar-light.png" : "./assets/avatar.png",
    )
  }

  localStorage.setItem(THEME_KEY, theme)
}

function toggleMode() {
  const html = document.documentElement
  const theme = html.classList.contains("light") ? "" : "light"

  applyTheme(theme)
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY)
  const theme = savedTheme === "light" ? "light" : ""

  applyTheme(theme)
}

initTheme()
