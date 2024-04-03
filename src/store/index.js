import { createStore } from "vuex";


const store = createStore({
    state:{
        is_show:false,
        datas:[
            {
              id:1,
              title: "CRM sistem design",
              name: "Nizomiddin1",
              status: "easy",
              date: "02/04/2024",
              category: "todo",
            },
            { id:2,
              title: " design",
              name: "Nizomiddin2",
              status: "Medium",
              date: "02/04/2024",
              category: "inProgress",
            },
            {
              id:3,
              title: "CRM design",
              name: "Nizomiddin3",
              status: "hard",
              date: "02/04/2024",
              category: "todo",
            },
            {
              id:4,
              title: "ns design",
              name: "Nizomiddin4",
              status: "Medium",
              date: "02/04/2024",
              category: "closed",
            },
            {
              id:5,
              title: "CRM sistem design",
              name: "Nizomiddin5",
              status: "easy",
              date: "02/04/2024",
              category: "closed",
            },
          ]
    },
    getters:{
        get_show(state){
            return state.is_show;
        }
    },  

    mutations:{
        SET_SHOW(state,payload){
            state.is_show=payload
        },

        SET_DATAS(state,payload){
            state.datas.push(payload)
        }
    },

    actions:{
        async set_show(context,is_show){
            context.commit('SET_SHOW',is_show)
        },

        async set_datas(context,datas){
            context.commit('SET_DATAS',datas)
        }
    },

    modules:{

    }

})


export default store