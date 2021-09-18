
const users = [
    {name: 'mario', premium: true},
    {name: 'yayo', premium: false},
    {name: 'mapping', premium: true},
    {name: 'tato', premium: true},
    {name: 'julios', premium: false},
];

const premUsers = (users) => {
    return users.filter(user => user.premium);
};

export {premUsers, users as default };

