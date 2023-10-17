import requester from './requester';

const { posttoserver, getfromserver } = requester;

export const state = () => ({
    clienttransactions: []
});

export const mutations = {
    SET_CLIENTTRANSACTIONS(state, data) {
        state.clienttransactions = data;
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
    async applyforloan({ commit }, loanbody) {
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            const data = await posttoserver({ token, body: loanbody, path: `loanapply` });

            if (data.success) {
                console.log(data.success.content.user)
                const _id = data.success.content.user;
                resolve(_id)
            } else {
                reject('fail')
            }
        })
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
        return new Promise(async (resolve, reject) => {
            const token = localStorage.getItem('873__jh6bdjklkjhghn');

            const data = await posttoserver({ token, body, path: `client/joininvestment` });

            if (data.success) {

                resolve('done')
            } else {
                reject('fail')
            }
        })
    }
}