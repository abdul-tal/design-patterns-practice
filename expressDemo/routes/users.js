const express = require('express');
const router = express.Router();

const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }

router.get('/',  (req, res) => {
    res.send(`Users List, ${req.requestTime}`)
})

router.use(requestTime)
router.get('/new', (req, res) => {
    
    res.send(`User new route, ${req.requestTime}`)
})

// router.get('/:userId', (req, res) => {
//     const userId = req.params.userId;
    
//     res.send(`GET: User with userId: ${userId}`)
// })

// router.post('/:userId', (req, res) => {
//     const userId = req.params.userId;
    
//     res.send(`POST: User with userId: ${userId}`)
// })

// router.delete('/:userId', (req, res) => {
//     const userId = req.params.userId;
    
//     res.send(`DELETE: User with userId: ${userId}`)
// })


router.route('/:userId').get((req, res) => {
    const userId = req.params.userId;
    
    res.send(`GET: User with userId: ${userId}, ${req.user}, ${req.requestTime}`)
}).post((req, res) => {
    const userId = req.params.userId;
    const username = req.body.username
    
    res.send(`POST: User with userId: ${userId}, ${username}`)
})


const users = {
    0: 'Abdul',
    1: 'Kaushal',
    2: 'Roopa'
}
router.param('userId', (req, res, next, id) => {
    req.user = users[id];
    next()
})




router.get('/form', (req, res) => {
    res.send('User Form')
})




module.exports = router

















// router.route('/:userId').get((req, res) => {
//     const userId = req.params.userId;
//     res.send(`GET User with userId: ${userId}`)
// }).post((req, res) => {
//     const userId = req.params.userId;
//     res.send(`POST User with userId: ${userId}`)
// })

// const users = {
//     0: 'Abdul',
//     1: 'Rahman',
//     2: 'Tamim'
// }
// router.param('userId', (req, res, next, id) => {
//     req.user = users[id];
//     next()
// })


