const form = document.querySelector("form"),
  fileInput = document.querySelector(".file-input"),
  uploadedArea = document.querySelector(".uploaded-area")

form.addEventListener("click", () => {
  fileInput.click()
})

fileInput.onchange = ({ target }) => {
  let file = target.files[0]
  if (file) {
    let fileName = file.name
    if (fileName.length >= 12) {
      let splitName = fileName.split(".")
      fileName = splitName[0].substring(0, 13) + "... ." + splitName[1]
    }
    uploadFile(fileName)
  }
}

function uploadFile(name) {
  const tempContainer = document.createElement("div")
  tempContainer.innerHTML = `<li class="row" id=${new Date().getTime()}>
                        <div class="content upload">
                          <i class="fas fa-file-alt"></i>
                          <div class="details">
                            <span class="name">${name} • Uploaded</span>
                          </div>
                        </div>
                        <i class="fas fa-check"></i>
                      </li>`
  const listItem = tempContainer.firstChild
  uploadedArea.appendChild(listItem)
}

const listElement = document.querySelector(".row")

listElement.addEventListener("click", (e) => {
  console.log("Hello", e)
})
