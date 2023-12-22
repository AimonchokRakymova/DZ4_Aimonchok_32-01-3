// 1

const cards = document.querySelector('.cards')

const xhr = new XMLHttpRequest()
xhr.open("GET", "peoples.json")
xhr.setRequestHeader("Content-type", "application/json")
xhr.send()


xhr.addEventListener("load", () => {
    const bio = JSON.parse(xhr.response)
    console.log(bio)
    bio.forEach((e) => {
        const div = document.createElement('div')
        div.classList.add('block1')
        const span = document.createElement('span')
        span.classList.add('span1')
        span.innerHTML = e.name

        const agespan = document.createElement('span')
        agespan.classList.add('agespan1')
        agespan.innerHTML = e.age

        const img = document.createElement('img')
        img.setAttribute("src", e.photo)

        div.append(span, agespan, img);
        cards.append(div)

    })
})

// 2
const obj = new XMLHttpRequest()
obj.open("GET", "main.json")
obj.setRequestHeader("Content-type", "application/json")
obj.send()

obj.onload = () => {
    console.log(JSON.parse(obj.response))
}

