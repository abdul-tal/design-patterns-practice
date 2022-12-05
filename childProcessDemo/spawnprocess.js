const { spawn } = require('child_process');

const sp = spawn('python', ['test/demo.py']);

sp.stdout.on('data', (data) => {
    console.log('.....data', data.toString())
})

sp.stderr.on('data', (data) => {
    console.log('.....data in error', data.toString())
})


