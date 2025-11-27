/* const discord = document.getElementById("discord");
const discordNick = "Iordbrack#6142";

discord.addEventListener("click", () => {
  const discordContent = discord.innerHTML;
  navigator.clipboard
    .writeText(discordNick)
    .then(() => {
      discord.innerText = "Copiado!";
      setTimeout(() => {
        discord.innerHTML = discordContent;
      }, 1500);
    })
    .catch((e) => alert(e.message));
}); */

const themeSwitch = document.getElementById("switch");
const html = document.documentElement;
console.log(html);

const localTheme = localStorage.getItem("@jos3sLinktree/Theme");
console.log(localTheme);
if (localTheme) {
  if (localTheme === "dark") {
    html.classList.add("dark");
    themeSwitch.checked = true;
  } else {
    html.classList.remove("dark");
    themeSwitch.checked = false;
  }
} else {
  localStorage.setItem("@jos3sLinktree/Theme", "light");
}

themeSwitch.addEventListener("change", ({ target: { checked } }) => {
  if (checked) {
    html.classList.add("dark");
    localStorage.setItem("@jos3sLinktree/Theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("@jos3sLinktree/Theme", "light");
  }
});


fetch('http://localhost:3000/messages')
.then(res =>res.json())
.then(messages => {
  const newMessage = document.getElementById('lista_mensagens')
  messages.forEach(p=>{
    const li = document.createElement('a')
    newMessage.appendChild(li);
    li.textContent = ' "' + `${p.nome}` + '"' + ' - por' + ` ${p.autor}`
    li.classList.add("link");
   
  })
})

