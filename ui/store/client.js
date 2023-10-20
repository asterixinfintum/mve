import { rejects } from 'assert';
import requester from './requester';
import { resolve } from 'path';

const { posttoserver, getfromserver } = requester;

export const state = () => ({
    clienttransactions: [],
    quickcontacts: [],
    userloans: [],
    usersavings: [],
    usersavingsplans: [],
    userinvestments: []
});

export const mutations = {
    SET_CLIENTTRANSACTIONS(state, data) {
        state.clienttransactions = data;
    },
    SET_QUICKCONTACTS(state, data) {
        state.quickcontacts = data;
    },
    SET_USERLOANS(state, data) {
        state.userloans = data;
    },
    SET_USERSAVINGSPLANS(state, data) {
        state.usersavings = data;
    },
    SET_USERINVESTMENTPLANS(state, data) {
        state.userinvestments = data;
    }
}

export const actions = {
    createtransfer({ commit }, transaction) {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            const data = await posttoserver({ token: token, body: transaction, path: 'transaction/transfer' });

            if (data.success) {
                setTimeout(() => {
                    resolve('success')
                }, 4000)
            } else {
                reject('fail')
            }
        });
    },
    async gettransfers({ commit }) {
        const token = localStorage.getItem('873__jh6bdjklkjhghn');

        const data = await getfromserver({ token, path: `transaction/get` });

        if (data.success) {
            const { content } = data.success;
            commit('SET_CLIENTTRANSACTIONS', content);
        }
    },
    async marknotificationsasread() {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            const data = await posttoserver({ token, body: {}, path: `client/viewnotifications` });

            if (data.success) {

                resolve('done')
            } else {
                reject('fail')
            }
        })
    },
    async supportcontact({ commit }, msgbody) {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            const data = await posttoserver({ token, body: msgbody, path: `client/supportcontact` });

            if (data.success) {

                resolve('done')
            } else {
                reject('fail')
            }
        })
    },
    async joininvestmentprog({ commit }, body) {
        try {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            const data = await posttoserver({ token, body, path: `client/joininvestment` });

            if (data.success) {

                return data.success
            }
        } catch (error) {
            return error;
        }
    },
    async createcontact({ commit }, body) {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            const data = await posttoserver({ token, body, path: `client/addcontact` });

            if (data.success) {

                resolve('done')
            }
        })
    },
    async getcontacts({ commit }) {
        const token = localStorage.getItem('873__jh6bdjklkjhghn');

        const data = await getfromserver({ token, path: `client/getcontacts` });

        if (data.success) {
            const final = data.success.content;
            console.log(final)
            commit('SET_QUICKCONTACTS', final)
        }
    },
    async submitloanrequest({ commit }, body) {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            const data = await posttoserver({ token, body, path: `client/loanrequest` });

            if (data.success) {
                const final = data.success.content;
                resolve(final)
            }
        })
    },
    async getuserloans({ commit }, userid) {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            const data = await getfromserver({ token, path: `client/getuserloans?user=${userid}` });

            if (data.success) {
                const final = data.success.content;

                commit('SET_USERLOANS', final);
            }
        })
    },
    async getuserinvestments({ commit }, userid) {
        try {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            const data = await getfromserver({ token, path: `client/getinvestments?user=${userid}` });

            if (data.success) {
                const final = data.success.content;

                commit('SET_USERINVESTMENTPLANS', final);
            }
        } catch (error) {
            return error;
        }
    },
    getusersavings({ commit }, userid) {
        return new Promise(async (resolve, reject) => { })
    },
    getusersavingsplans({ commit }, userid) {
        return new Promise(async (resolve, reject) => { })
    }
}