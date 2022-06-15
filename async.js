const { text } = require("express")

const fetchdata = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done')
        }, 2000)
    })
    return promise
}
setTimeout(() => {
    console.log('Done')
    fetchdata().then(text => {
        console.log(text)
        return fetchdata();
    }).then(text2 => {
        console.log(text2)
    })
}, 2000)