import requester from './requester';

const { posttoserver, getfromserver } = requester;

export const state = () => ({
    client: null,
    clientToken: null,
    authError: null,
    account: null,
    cards: null
});

export const mutations = {
    SET_CLIENT(state, data) {
        state.client = data;
    },
    SET_CLIENT_TOKEN(state, data) {
        state.clientToken = data;
    },
    SET_AUTH_ERROR(state, data) {
        state.authError = data
    },
    SET_ACCOUNT(state, data) {
        state.account = data;
    },
    SET_CARDS(state, data) {
        state.cards = data;
    }
}

export const actions = {
    checkauthdup({ commit }, credentials) {
        return new Promise(async (resolve, reject) => {
            const { email, phonenumber } = credentials;

            const data = await posttoserver({ body: { email, phonenumber }, path: 'checkduplicateuser' });

            if (data.success) {
                resolve(data)
            } else {
                reject('error')
            }
        })
    },
    register({ commit }, newuser) {
        return new Promise(async (resolve, reject) => {
            const data = await posttoserver({ body: newuser, path: 'signup' });

            if (data.success) {
                const { content } = data.success;
                const { _id, email, firstname, lastname, phonenumber, notifications, tokens } = content;
                const client = {
                    _id,
                    username: `${firstname} ${lastname}`,
                    phonenumber,
                    email,
                    token: tokens[0],
                    notifications
                };

                commit('SET_CLIENT', client);
                commit('SET_CLIENT_TOKEN', tokens[0]);
                localStorage.setItem('873__jh6bdjklkjhghn', tokens[0]);
                resolve(_id);
            } else {
                reject('error')
            }
        });
    },
    login({ commit }, credentials) {
        return new Promise(async (resolve, reject) => {
            const data = await posttoserver({ body: credentials, path: 'login' });

            if (data.success) {
                const { content } = data.success;
                const { _id, email, firstname, lastname, phonenumber, notifications, tokens } = content;
                const client = {
                    _id,
                    username: `${firstname} ${lastname}`,
                    phonenumber,
                    email,
                    token: tokens[0],
                    notifications
                };

                commit('SET_CLIENT', client);
                commit('SET_CLIENT_TOKEN', client.token);
                localStorage.setItem('873__jh6bdjklkjhghn', client.token);
                resolve(_id);
            } else {
                reject('error')
            }
        });
    },
    logout() {

    },
    showautherror({ commit }, autherror) {
        commit('SET_AUTH_ERROR', autherror);
    },
    removeautherror({ commit }) {
        commit('SET_AUTH_ERROR', null)
    },
    async getcurrentclient({ commit }, id) {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            if (token) {
                const data = await getfromserver({ token: token, path: `currentclient?id=${id}` });

                if (data.success) {
                    const { content } = data.success;
                    const { account, user, cards } = content;
                    const { _id, email, firstname, lastname, phonenumber, notifications, tokens } = user;

                    const client = { 
                        _id, 
                        email, 
                        firstname, 
                        lastname, 
                        phonenumber, 
                        notifications, 
                        token: tokens[0], 
                    }
                    
                    commit('SET_ACCOUNT', account);
                    commit('SET_CARDS', cards);
                    commit('SET_CLIENT', client);
                    commit('SET_CLIENT_TOKEN', client.token)
                }
            } else {
                reject('no user token')
            }
        })
    }
}