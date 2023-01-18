
const x = ['\r|   ', '\r/   ','\r-   ', '\r\\   ','\r|   ',
           '\r|   ', '\r/   ','\r-   ', '\r\\   ','\r|   '  ]
  
const spinner = (movements) => {
    let r = 100
    for (const a of movements) {
        setTimeout(() => {
        process.stdout.write(a);
        }, r );
        r += 200
    }
}


spinner(x)