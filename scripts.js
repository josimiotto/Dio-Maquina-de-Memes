function enablePhotoUpload(){
  const imageInput = document.querySelector("#image-input")

  imageInput.addEventListener("change", function(){
    const reader = new FileReader()

    reader.addEventListener("load", ()=>{
      const uploadImage = reader.result

      changeMemePicture(uploadImage)
      
      // document.querySelector("#display-image").style
      // .backgroundImage = `url(${uploadImage})`

    })

    reader.readAsDataURL(this.files[0])

  })

}

async function mapImageList(){
  const memesObject = [
    {
      "name": "pulp",
      "path": "pictures/pulp2.jpg"
    },
    {
      "name": "sorrah",
      "path": "pictures/sorra.jpg"
    },
    {
      "name": "rir",
      "path": "pictures/rir.jpg"
    },
    {
      "name": "dog2",
      "path": "pictures/dog2.jpg"
    },
    {
      "name": "linhaerro",
      "path": "pictures/linhaerro.jpg"
    },
    {
      "name": "dog1",
      "path": "pictures/dog1.jpg"
    },
    {
      "name": "fanto1",
      "path": "pictures/fanto1.jpg"
    },
  ]

  return memesObject

}

async function createGallery(imageList){
  const memeSelector = document.querySelector("#memes-list")

  imageList.forEach(picture => {
      let newOption = document.createElement("option")
      newOption.text = picture.name.toUpperCase()
      newOption.value = picture.path
      memeSelector.appendChild(newOption)
  });
}


async function changeMemePicture(photo) {
  let displayImage = document.querySelector("#display-image")
  displayImage.style.backgroundImage = `url('${photo}')`
}


async function main(){
  const memesImageList = await mapImageList()
  
  enablePhotoUpload()
  await createGallery(memesImageList)
  await changeMemePicture(memesImageList[1].path)
  
}

main()