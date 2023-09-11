import { createStore } from 'vuex'


export const store = createStore({
  state() {
    return {
    mydata: [
      {
        id: 1,
        user: {
          name: "Justin Septimus",
          email: "example@email.com",
          user_status: "active",
          activity: [
            {
                date: "12/APR/2020",
                user_activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
              },
          ],
        },
        last_login: "12/APR/2020",
        payment_status: "Paid",
        payment_date: "15/APR/2020",
        amount: "$200",
        currency: "USD",
        open: false 
      },
      {
        id: 2,
        user: {
          name: "Anika Rhiel Madsen",
          email: "example@email.com",
          user_status: "active",
          activity: [
            {
              date: "12/APR/2020",
              user_activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
              detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
            },
            {
              date: "12/APR/2020",
              user_activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
              detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
            },
            {
              date: "12/APR/2020",
              user_activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
              detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
            },
          ],
        },
        last_login: "13/APR/2020",
        payment_status: "Overdue",
        payment_date: "15/APR/2020",
        amount: "$300",
        currency: "USD",
        open: false 
      },
      {
        id: 3,
        user: {
          name: "Erin Levin",
          email: "example@email.com",
          user_status: "inactive",
          activity: [
          ],
        },
        last_login: "11/APR/2020",
        payment_status: "Unpaid",
        payment_date: "15/APR/2020",
        amount: "$750",
        currency: "USD",
        open: false 
      },
      {
        id: 4,
        user: {
          name: "John Doe",
          email: "john@example.com",
          user_status: "active",
          activity: [
            {
              date: "13/APR/2020",
              user_activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
              detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
            },
            {
              date: "14/APR/2020",
              user_activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
              detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
            },
          ],
        },
        last_login: "15/APR/2020",
        payment_status: "Paid",
        payment_date: "16/APR/2020",
        amount: "$150",
        currency: "USD",
        open: false,
      },
      {
        id: 5,
        user: {
          name: "Emily Smith",
          email: "emily@example.com",
          user_status: "active",
          activity: [
            {
              date: "15/APR/2020",
              user_activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
              detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
            },
            {
              date: "16/APR/2020",
              user_activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
              detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
            },
          ],
        },
        last_login: "17/APR/2020",
        payment_status: "Overdue",
        payment_date: "18/APR/2020",
        amount: "$250",
        currency: "USD",
        open: false,
      },
    
      // Add more random data objects without specific logic up to id 20
      {
        id: 6,
        user: {
          name: "User 6",
          email: "user6@example.com",
          user_status: "active",
          activity: [
            {
              date: "20/APR/2020",
              user_activity: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
              detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
            },
          ],
        },
        last_login: "19/APR/2020",
        payment_status: "Paid",
        payment_date: "20/APR/2020",
        amount: "$400",
        currency: "EUR",
        open:false,
      },
      {
        id: 7,
        user: {
          name: "User 7",
          email: "user7@example.com",
          user_status: "inactive",
          activity: [],
        },
        last_login: "21/APR/2020",
        payment_status: "Unpaid",
        payment_date: "22/APR/2020",
        amount: "$800",
        currency: "GBP",
        open:false,
      },
    ],
  }
  },
  mutations: {
    // Define a mutation to toggle the 'open' property for a specific item
    toggleItemOpen(state, itemId) {
      const item = state.mydata.find((dataItem) => dataItem.id === itemId);
      if (item) {
        item.open = !item.open; // Toggle the 'open' property
        state.mydata.forEach((dataItem) => {
            if (dataItem.id !== itemId) {
              dataItem.open = false;
            }
          });
      }
    },
  },
  actions: {
    // Define actions here if you need to perform asynchronous operations
  },
})
