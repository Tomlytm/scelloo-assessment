<template>
  <v-main style=" background-color: #F4F2FF; min-height: 100vh;">
   <div style="max-width: 1100px; margin: 0 auto; color: #6e6893; padding-top: 50px;"> <div class="font-weight-bold text-uppercase grey mb-3">TABLE HEADING</div>
    <v-row class="row-with-buttons">
      <!-- Left side with buttons -->
      <v-col cols="8">
        <v-btn-toggle
          v-model="selectedButton"
          rounded="0"
          class="button-toggle m0"
          variant="light"
        >
          <v-btn
            @click="selectButton('All')"
            :class="buttonClasses('All')"
            class=""
            >All</v-btn
          >
          <v-btn @click="selectButton('Paid')" :class="buttonClasses('Paid')"
            >Paid</v-btn
          >
          <v-btn
            @click="selectButton('Unpaid')"
            :class="buttonClasses('Unpaid')"
            >Unpaid</v-btn
          >
          <v-btn
            @click="selectButton('Overdue')"
            :class="buttonClasses('Overdue')"
            >Overdue</v-btn
          >
        </v-btn-toggle>
      </v-col>

      <!-- Right side with text -->
      <v-col cols="4" class="text-right">
        <p class="tot prim" style="font-weight: 600; color: #6e6893">
          Total payable amount:<span class="amount font-weight-bold prim1">
            ${{ totalAmount.toFixed(2) }}</span
          >
          <span class="" style="font-size: 18px">USD</span>
        </p>
      </v-col>
    </v-row>

    <!-- Grey divider -->
    <v-divider thickness="2" class="mb-4"></v-divider>
    <v-card
      class=""
      style="border-radius: 10px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;3"
    >
      <div
        class="d-flex justify-space-between align-center py-3 px-5"
        style="border-bottom: 1px solid #c6c2de"
      >
        <div class="d-flex justify-space-between w-50">
          <v-menu>
            <template v-slot:activator="{ props }">
              <button
                style="border: 1px solid #c6c2de"
                class="px-3 py-2 rounded-lg"
                color=""
                v-bind="props"
              >
                <div class="d-flex justify-space-between align-center">
                  <svg
                    class="me-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12L20 4V0H0V4L8 12V20L12 16V12Z"
                      fill="#8B83BA"
                    />
                  </svg>
                  <div style="font-size: 16px" class="text-black">Filter</div>
                </div>
              </button>
            </template>

            <v-list style="width: 190px; border-radius: 6px">
              <v-list-item class="ma-0">
                <div style="color: #6e6893; font-size: 12px" class="mb-2">
                  SORT BY:
                </div>
                <div class="mb-1 d-flex justify-space-between">
                  <label for="sortByDefault" style="font-size: 12px"
                    >Default</label
                  >
                  <input
                    type="radio"
                    v-model="sortBy"
                    value="default"
                    id="sortByDefault"
                  />
                </div>
                <div class="mb-1 d-flex justify-space-between">
                  <label for="sortByFirstName" style="font-size: 12px"
                    >First Name</label
                  >
                  <input
                    type="radio"
                    v-model="sortBy"
                    value="firstName"
                    id="sortByFirstName"
                  />
                </div>
                <div class="mb-1 d-flex justify-space-between">
                  <label for="sortByLastName" style="font-size: 12px"
                    >Last Name</label
                  >
                  <input
                    type="radio"
                    v-model="sortBy"
                    value="lastName"
                    id="sortByLastName"
                  />
                </div>
                <div class="mb-1 d-flex justify-space-between">
                  <label for="sortByDueDate" style="font-size: 12px"
                    >Due Date</label
                  >
                  <input
                    type="radio"
                    v-model="sortBy"
                    value="dueDate"
                    id="sortByDueDate"
                  />
                </div>
                <div class="mb-1 d-flex justify-space-between">
                  <label for="sortByDueEmail" style="font-size: 12px"
                    >Email</label
                  >
                  <input
                    type="radio"
                    v-model="sortBy"
                    value="email"
                    id="sortByEmail"
                  />
                </div>
                <div class="mb-1 d-flex justify-space-between">
                  <label for="sortByLastLogin" style="font-size: 12px"
                    >Last Login</label
                  >
                  <input
                    type="radio"
                    v-model="sortBy"
                    value="lastLogin"
                    id="sortByLastLogin"
                  />
                </div>
                <v-divider class="mb-2"></v-divider>
                <div style="color: #6e6893; font-size: 12px" class="mb-2">
                  USERS:
                </div>
                <div class="mb-1 d-flex justify-space-between">
                  <label for="userAll" style="font-size: 12px">All</label>
                  <input
                    type="radio"
                    v-model="selectedUser"
                    value="all"
                    id="userAll"
                  />
                </div>
                <div class="mb-1 d-flex justify-space-between">
                  <label for="userActive" style="font-size: 12px">Active</label>
                  <input
                    type="radio"
                    v-model="selectedUser"
                    value="active"
                    id="userActive"
                  />
                </div>
                <div class="mb-1 d-flex justify-space-between">
                  <label for="userInactive" style="font-size: 12px"
                    >Inactive</label
                  >
                  <input
                    type="radio"
                    v-model="selectedUser"
                    value="inactive"
                    id="userInactive"
                  />
                </div>
              </v-list-item>
            </v-list>
          </v-menu>
          <div style="width: 392px">
            <v-text-field
              bg-color="#F4F2FF"
              :loading="loading"
              density="compact"
              rounded="6"
              variant=""
              label="Search Users by Name, Email or Date"
              prepend-inner-icon="mdi-magnify"
              single-line
              hide-details
              @click:append-inner="onClick"
              v-model="searchQuery"
            ></v-text-field>
          </div>
        </div>
        <div>
          <v-btn
            class="elevation-0"
            color="#6D5BD0"
            style="letter-spacing: normal"
            @click="markUsersAsPaid"
          >
            Pay Dues
          </v-btn>
        </div>
      </div>
      <div
        class="py-4 px-5"
        style="background-color: #f4f2ff; border-bottom: 1px solid #c6c2de"
      >
        <v-row>
          <v-col cols="1" class="d-flex align-center"
            ><input type="checkbox" class="custom-checkbox" />
          </v-col>
          <v-col
            cols="2"
            class="d-flex align-center"
            style="
              font-size: 12px;
              letter-spacing: 1px;
              line-height: 15px;
              font-weight: 600;
              color: #6e6893;
            "
            >NAME</v-col
          >
          <v-col
            cols="4"
            class="d-flex align-center"
            style="
              font-size: 12px;
              letter-spacing: 1px;
              line-height: 15px;
              font-weight: 600;
              color: #6e6893;
            "
            >USER STATUS</v-col
          >
          <v-col
            cols="2"
            class="d-flex align-center"
            style="
              font-size: 12px;
              letter-spacing: 1px;
              line-height: 15px;
              font-weight: 600;
              color: #6e6893;
            "
            >PAYMENT STATUS</v-col
          >
          <v-col
            cols="1"
            class="d-flex align-center"
            style="
              font-size: 12px;
              letter-spacing: 1px;
              line-height: 15px;
              font-weight: 600;
              color: #6e6893;
            "
            >AMOUNT</v-col
          >
          <v-col
            class="d-flex justify-end"
            cols="2"
            style="
              font-size: 12px;
              letter-spacing: 1px;
              line-height: 15px;
              font-weight: 600;
              color: #6e6893;
            "
            ><svg
              width="6"
              height="20"
              viewBox="0 0 6 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.99283 7.80488C4.18331 7.80488 5.13569 8.78049 5.13569 10C5.13569 11.2195 4.18331 12.1951 2.99283 12.1951C1.80236 12.1951 0.849976 11.2195 0.849976 10C0.849976 8.78049 1.80236 7.80488 2.99283 7.80488ZM0.849976 2.19512C0.849976 3.41463 1.80236 4.39024 2.99283 4.39024C4.18331 4.39024 5.13569 3.41463 5.13569 2.19512C5.13569 0.97561 4.18331 0 2.99283 0C1.80236 0 0.849976 0.97561 0.849976 2.19512ZM0.849976 17.8049C0.849976 19.0244 1.80236 20 2.99283 20C4.18331 20 5.13569 19.0244 5.13569 17.8049C5.13569 16.5854 4.18331 15.6098 2.99283 15.6098C1.80236 15.6098 0.849976 16.5854 0.849976 17.8049Z"
                fill="#8B83BA"
              />
            </svg>
          </v-col>
        </v-row>
      </div>
      <div v-for="user in filteredData" :key="user.id">
        <ExpansionRow :item="user" />
      </div>
      <div class="pa-2 d-flex justify-end align-center" style="background-color: #F4F2FF; color: #6E6893;">
        <div class="d-flex justify-space-between align-center w-50 px-3">
          <div style="font-size: 12px; font-weight: 600;">Rows per page: 10 <svg class="ms-2" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5L0 0H8L4 5Z" fill="#6E6893"/>
</svg>
</div>
          <div style="font-size: 12px; font-weight: 600;">1-10 of 276</div>
         
            <div class=""><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.79971 1.10636C6.42812 0.51287 5.43313 -0.426818 4.80472 0.216126L0.196378 4.51891C-0.0654595 4.7662 -0.0654595 5.21131 0.196378 5.4586L4.80472 9.81084C5.43313 10.4043 6.42812 9.46464 5.79971 8.87115L1.71504 5.01348L5.79971 1.10636Z" fill="#6E6893"/>
</svg>
</div>
            <div><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.200293 1.10636C-0.428118 0.51287 0.566865 -0.426818 1.19528 0.216126L5.80362 4.51891C6.06546 4.7662 6.06546 5.21131 5.80362 5.4586L1.19528 9.81084C0.566865 10.4043 -0.428118 9.46464 0.200293 8.87115L4.28496 5.01348L0.200293 1.10636Z" fill="#6E6893"/>
</svg>
</div>
        </div>
      </div>
    </v-card>
    </div>
  </v-main>
</template>

<script>
import ExpansionRow from "../components/ExpansionRow.vue";
import { mapMutations } from 'vuex'; 
export default {
  components: {
    ExpansionRow,
  },
  mounted() {
    console.log("ehe");
  },
  data() {
    return {
      selectedButton: "All",
      totalAmount: 900.0,
      searchQuery: "",
      sortBy: "default",
      selectedUser: "all",
    };
  },
  methods: {
    selectButton(button) {
      this.selectedButton = button;
    },
    buttonClasses(button) {
      return {
        "button-active": this.selectedButton === button,
        "button-inactive": this.selectedButton !== button,
      };
    },
  },
  computed: {
    filteredData() {
      const query = this.searchQuery.toLowerCase();
      let filteredUsers = this.$store.state.mydata.filter((user) => {
        return (
          user.user.name.toLowerCase().includes(query) ||
          user.user.email.toLowerCase().includes(query)
        );
      });

      if (this.selectedUser === "inactive" ) {
        filteredUsers.sort((a, b) => b.user.user_status.localeCompare(a.user.user_status));
    } else if (this.selectedUser === "active") {
      filteredUsers.sort((a, b) => a.user.user_status.localeCompare(b.user.user_status));
    }
     else if (this.sortBy === "firstName") {
        filteredUsers.sort((a, b) => a.user.name.localeCompare(b.user.name));
      }
      else if (this.sortBy === "email") {
        filteredUsers.sort((a, b) => a.user.email.localeCompare(b.user.email));
      }
      else if (this.sortBy === "lastName") {
      filteredUsers.sort((a, b) => {
        const lastNameA = a.user.name.split(" ").pop();
        const lastNameB = b.user.name.split(" ").pop();
        return lastNameA.localeCompare(lastNameB);
      });
    } 
      else if (this.sortBy === "dueDate") {
  filteredUsers.sort((a, b) => {
    const dateA = new Date(a.payment_date); // Assuming that the payment_date is a valid date string
    const dateB = new Date(b.payment_date); // Assuming that the payment_date is a valid date string
    return dateA - dateB;
  });
}

// Sort by last login
else if (this.sortBy === "lastLogin") {
  filteredUsers.sort((a, b) => {
    const dateA = new Date(a.last_login); // Assuming that the last_login is a valid date string
    const dateB = new Date(b.last_login); // Assuming that the last_login is a valid date string
    return dateA - dateB;
  });
}
      
     
      // Filter the sorted data based on the selected button
      if (this.selectedButton === "Paid") {
        filteredUsers = filteredUsers.filter(
          (user) => user.payment_status === "Paid"
        );
      } else if (this.selectedButton === "Unpaid") {
        filteredUsers = filteredUsers.filter(
          (user) => user.payment_status === "Unpaid"
        );
      } else if (this.selectedButton === "Overdue") {
        filteredUsers = filteredUsers.filter(
          (user) => user.payment_status === "Overdue"
        );
      }

      return filteredUsers;
    },
  },
};
</script>
<style>
.grey {
  color: #6e6893;
}
.bg-light {
  background-color: #f2f0f9;
}
.row-with-buttons {
  justify-content: space-between;
  align-items: center;
}

.button-toggle {
  background-color: transparent;
  border: none;
}
v-btn {
  border-radius: 0;
}
.button-toggle .v-btn {
  color: #6e6893;
  border-bottom-color: transparent;
  text-transform: capitalize; /* Convert button text to lowercase */
  font-size: 14px; /* Set font size to 14px */
  letter-spacing: normal;
  font-weight: 600;
}

.button-toggle .v-btn.button-active {
  color: #25213b;
  border-bottom-color: #25213b;
  border-bottom-width: 2px;
}

.button-toggle .v-btn.button-inactive:hover {
  color: #6e6893;
  font-weight: 600;
}
.m0 {
  margin-bottom: -2px;
}
.prim {
  color: #25213b;
}
.prim1 {
  color: #6d5bd0;
  font-size: 18px;
}
.custom-checkbox {
  width: 20px; /* Set the desired width */
  height: 20px; /* Set the desired height */
  background-color: #3498db; /* Set the background color */
  border: 2px solid #2980b9; /* Set a border for the checkbox */
  border-radius: 5px; /* Rounded corners */
}
.accordion-title {
  cursor: pointer;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.accordion-title.open {
  background-color: #f4f2ff;
}
.accordion-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s;
}

.accordion-icon.open {
  transform: rotate(180deg);
}

.accordion-content {
  background-color: #f4f2ff;
}

.accordion-fade-enter-active,
.accordion-fade-leave-active {
  transition: opacity 0.5s, transform 0.3s;
}

.accordion-fade-enter,
  .accordion-fade-leave-to /* .accordion-fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
}
</style>