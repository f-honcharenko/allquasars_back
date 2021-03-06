const express = require('express');
const bodyPaster = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const jwt = require('jsonwebtoken');
const user = require('./models/user');
// const e = require('express');

mongoose.connect(config.mongoose.link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const app = express();
app.use(cors());
app.use(bodyPaster.json());
app.use(bodyPaster.urlencoded({ extended: false }));

//routes
app.post('/signup', (req, res, next) => {
    console.log(req.body);
    let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.date,
        email: req.body.email,
        type: req.body.type,
        password: bcrypt.hashSync(req.body.password, config.bcrypt.salt),
        startDisabled: true,
    });
    // Math.random().toString(36).substring(2);
    user.findOne(
        { email: newUser.email },
        { _id: 1 },
        async (err, userRes) => {
            if (userRes) {
                //User with this email was found
                return res.status(409).json({
                    title: 'Error',
                    message: 'email already used',
                })
            } else {
                let nicknameCreated = false;
                let nickname;
                while (!nicknameCreated) {
                    nickname = Math.random().toString(36).substring(2);
                    console.log(nickname);
                    nicknameCreated = true;
                    await user.findOne(
                        { nickname: nickname },
                        { _id: 1 },
                        (err, res2) => {
                            if (!res2) {
                                nicknameCreated = true;
                                newUser.nickname = nickname;
                                newUser.save(err => {
                                    if (err) {
                                        return res.status(400).json({
                                            title: 'error',
                                            message: err
                                        });
                                    } else {
                                        return res.status(200).json({
                                            title: 'singup success',
                                            message: ''
                                        });
                                    }
                                });
                            }
                        });

                }


            }
        });


});

app.post('/login', (req, res, next) => {
    console.log(req.body);
    //Проверка полей, не пусты ли онм
    if (!req.body.email || !req.body.password) {
        return res.status(406).json({
            title: 'cannot get',
            message: 'some fields are empty'
        });
    }

    // console.log(req.body);

    // Поиск
    User.findOne(
        { email: req.body.email },
        { password: 1, _id: 1 },
        (err, result) => {
            if (err) return req.sataus(500).json({
                title: 'Server error',
                message: 'some error(find user)' + err,
            });
            if (!result) {
                res.status(401).json({
                    title: 'user not found',
                    message: 'user not found'
                });
            }
            //user was founded
            if (result) {
                //incorecet password
                if (!bcrypt.compareSync(req.body.password, result.password)) {
                    return res.status(401).json({
                        title: 'login  falied',
                        message: 'invalid password'
                    });
                }
                //if all is good
                let token = jwt.sign({ userId: result._id }, config.jwt.secret);
                return res.status(200).json({
                    title: 'login succses',
                    message: 'aouthorized',
                    token
                });
            }
        });

});

//grabing user info
app.get('/user', (req, res, next) => {
    let token = req.headers.token;
    jwt.verify(token, config.jwt.secret, (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized',
            message: 'invalid token',
            err
        });
        //token is valid
        user.findOne(
            { _id: decoded.userId },
            // {firstName:1, email:1},
            (err, user) => {
                if (err) return console.log(err);
                return res.status(200).json({
                    title: 'authroizated',
                    message: 'all is good',
                    user
                })
            });
    });
});

app.post('/user', (req, res, next) => {
    console.log(req.body.newUserValues);
    let newUserValues = req.body.newUserValues;
    console.log(newUserValues);
    const token = req.body.token;

    jwt.verify(token, config.jwt.secret, (err, decoded) => {
        //auth succses
        User.findOne(
            { email: newUserValues.email },
            { password: 1, _id: 1 },
            (err, result) => {
                //server error
                if (err) return req.sataus(500).json({
                    title: 'Server error',
                    message: 'An error occurred while searching for a user :(. ' + err,
                });
                //user not founded
                if (!result) {
                    res.status(401).json({
                        title: 'User not found',
                        message: 'We cannot find user by this email.'
                    });
                }
                //user was founded
                if (result) {
                    console.log();
                    user.updateOne(
                        { _id: result._id },
                        newUserValues,
                        { upsert: false },
                        (err, result) => {
                            if (!err) {
                                return res.status(200).json({
                                    title: 'Saved',
                                    message: 'your profile was success saved',
                                })
                            }
                            console.log(result);
                        });

                }
            });
    });



});

app.delete('/user', (req, res, next) => {
    console.log(req.body);

});


// app.get('/userDescription', (req, res, next) => {
//     let token = req.headers.token;
//     let inputs = req.body.inputs;
//     let id = req.headers.id;
//     console.log('/userDescription is used');
//     jwt.verify(token, config.jwt.secret, (err,decoded)=>{
//         if (err) return res.status(401).json({
//             title:'unauthorized',
//             message:'invalid token',
//             err
//         });

//         //token is valid
//         user.findOne(
//             {_id:id},
//             inputs,
//             (err, user) =>{
//             if (err) return console.log(err);
//             return res.status(200).json({
//                 title:'анайдено',
//                 message:'all is good',
//                 user//Настройка мини-профиля!!!
//             }) 
//         });
//     });


//     user.findOne(
//         {_id:id},
//         inputs,
//         (err, user) =>{
//         if (err) return console.log(err);
//         return res.status(200).json({
//             title:'анайдено',
//             message:'all is good',
//             user//Настройка мини-профиля!!!
//         }) 
//     });
// });

//grab use4rs
app.post('/getUsers', (req, res, next) => {
    let token = req.body.token;
    let filters = req.body.newFilters;
    console.log('1', filters.types);
    console.log(req.body);
    jwt.verify(token, config.jwt.secret, (err, decoded) => {
        if (err) return res.status(401).json({
            title: 'unauthorized',
            message: 'invalid token',
            err
        });
        //token is valid
        User.find(
            filters,
            // { name: 1, type: 1 },
            (err, result) => {
                console.log('RES', result);
                console.log('err', err);
                if (err) {
                    res.status(500).json({
                        title: 'ERROR!',
                        message: 'smth wrong',
                        err
                    })
                    return console.log(err);
                } else {
                    console.log();
                    if (result.length == 0) {
                        return res.status(404).json({
                            title: 'OK',
                            message: 'not found',
                            result
                        })
                    } else {
                        return res.status(200).json({
                            title: 'OK',
                            message: 'all is good',
                            result
                        })
                    }
                }
            }).sort({ name: 1 });//Сортировка по имени

    });
});


const port = process.env.PORT || config.express.port;
app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Servver running on port ' + port);
}); 