var getUser = (id, callbacks) => {
    var user = {
        id: id,
        name: 'Andy'
    };

    setTimeout(() => {
        callbacks(user);
    }, 3000);
};

getUser(20, (userObject) => {
    console.log(userObject);
});