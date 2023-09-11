<template>
  <v-main class="w-100">
    <div class="accordion-item">
      <div
        :class="['accordion-title w-100 ma-0', item.open ? 'open' : '']"
        @click="toggleOpenForItem(item.id, $event)"
      >
        <div class="py-3 px-5 ma-0 w-100" style="border-bottom: 1px solid #c6c2de">
          <v-row>
            <v-col cols="1" class="d-flex align-center justify-space-between"
              >
              <input
                type="checkbox"
                class="custom-checkbox"
                @click.stop
                v-model="itemCheckboxState"
              />

              <svg
                :class="['accordion-icon', item.open ? 'open' : '']"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.97895 9.85263C7.24737 10.1211 7.73684 10.1211 8.00526 9.85263L10.8474 7.01053C11.1316 6.72632 11.1316 6.26842 10.8474 5.98421C10.5632 5.7 10.1053 5.7 9.82105 5.98421L7.5 8.30526L5.17895 5.98421C5.03684 5.84211 4.84737 5.76316 4.65789 5.76316C4.46842 5.76316 4.27895 5.84211 4.13684 5.98421C3.85263 6.26842 3.85263 6.72632 4.13684 7.01053L6.97895 9.85263Z"
                  fill="#8B83BA"
                />
                <path
                  d="M7.5 15C11.6368 15 15 11.6368 15 7.5C15 3.36316 11.6368 0 7.5 0C3.36316 0 0 3.36316 0 7.5C0 11.6368 3.36316 15 7.5 15ZM7.5 1.45263C10.8316 1.45263 13.5474 4.16842 13.5474 7.5C13.5474 10.8316 10.8316 13.5474 7.5 13.5474C4.16842 13.5474 1.45263 10.8316 1.45263 7.5C1.45263 4.16842 4.16842 1.45263 7.5 1.45263Z"
                  fill="#8B83BA"
                />
              </svg>
              
            </v-col>
            <v-col cols="2" class="d-flex align-center">
              <div>
                <div
                  class="mb-2"
                  style="
                    font-size: 15px;
                    line-height: 22px;
                    font-weight: 500;
                    color: #25213b;
                  "
                >
                  {{item.user.name }}
                </div>
                <div style="font-size: 14px; line-height: 10px; color: #6e6893">
                    {{item.user.email }}
                </div>
              </div>
            </v-col>
            <v-col cols="4" class="d-flex align-center">
              <div>
                <div class="mb-2" style="font-weight: 500; color: #25213b;">
                  <span
                    :style="{
                      backgroundColor: '#e6e6f2',
                      fontSize: '14px',
                      color: statusColor,
                      fontWeight: 400,
                      textTransform: 'capitalize',
                    }"
                    class="rounded-pill px-2 py-1"
                  >
                   <span style="font-size: 15px;">●</span>  {{ item.user.user_status }}</span
                  >
                </div>
                <div style="font-size: 14px; line-height: 15px; color: #6e6893">
                  Last login: {{item.last_login }}
                </div>
              </div>
            </v-col>
            <v-col cols="2" class="d-flex align-center">
              <div>
                <div class="mb-2" style="font-weight: 500; color: #25213b">
                  <span
                  :style="{
                      backgroundColor: statusBg,
                      fontSize: '14px',
                      color: statusCol,
                      fontWeight: 400,
                    }"
                    class="rounded-pill px-2 py-1"
                    ><span style="font-size: 15px;">●</span> {{item.payment_status }}</span
                  >
                </div>
                <div
                  style="font-size: 14px; line-height: 15px; font-weight: 500; color: #25213B;"
                >
                  {{ statusText(item.payment_status) }} {{item.payment_date}}
                </div>
              </div>
            </v-col>
            <v-col cols="1" class="d-flex align-center justify-center">
              <div style="">
                <div class="mb-2" style="font-weight: 500; color: #25213b">
                  <span
                    class="d-flex justify-end"
                    style="font-weight: 600; font-size: 15px"
                    >{{item.amount }}</span
                  >
                </div>
                <div
                  class="d-flex justify-end"
                  style="font-size: 13px; line-height: 15px; color: #6e6893"
                >
                {{item.currency }}
                </div>
              </div>
            </v-col>

            <v-col
              class="d-flex justify-space-between align-center ps-6"
              cols="2"
              style="font-size: 15px; line-height: 15px; color: #6e6893"
            >
              <span>View More</span>
              <svg
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
      </div>
      <transition name="accordion-fade">
        <div
          v-if="item.open"
          :class="['accordion-content', item.open ? 'open' : '']"
        >
       
            <v-row
      class="px-5 pt-4"
      style="background-color: #f2f0f9; border-bottom: 1px solid #c6c2de"
    >
      <v-col
        cols="2"
        class="d-flex align-center justify-center"
        style="
          font-size: 12px;
          letter-spacing: 1px;
          line-height: 15px;
          font-weight: 600;
          color: #6e6893;
        "
        >DATE</v-col
      >
      <v-col
        cols="3"
        class="d-flex align-center"
        style="
          font-size: 12px;
          letter-spacing: 1px;
          line-height: 15px;
          font-weight: 600;
          color: #6e6893;
        "
        >USER ACTIVITY</v-col
      >
      <v-col
        class="d-flex align-center"
        style="
          font-size: 12px;
          letter-spacing: 1px;
          line-height: 15px;
          font-weight: 600;
          color: #6e6893;
        "
        >DETAIL
        <svg
          class="ms-2 mb-1"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.28966 12.8947C1.57334 12.2028 1.00197 11.3752 0.608901 10.4602C0.215834 9.54517 0.0089368 8.56102 0.000283176 7.56517C-0.00837045 6.56933 0.181392 5.58173 0.558499 4.66001C0.935606 3.73828 1.4925 2.90089 2.1967 2.1967C2.90089 1.4925 3.73828 0.935606 4.66001 0.558499C5.58173 0.181392 6.56933 -0.00837045 7.56517 0.000283176C8.56102 0.0089368 9.54517 0.215834 10.4602 0.608901C11.3752 1.00197 12.2028 1.57334 12.8947 2.28966C14.2608 3.70418 15.0168 5.59869 14.9997 7.56517C14.9826 9.53165 14.1939 11.4127 12.8033 12.8033C11.4127 14.1939 9.53165 14.9826 7.56517 14.9997C5.59869 15.0168 3.70418 14.2608 2.28966 12.8947ZM11.8372 11.8372C12.963 10.7113 13.5955 9.18435 13.5955 7.59216C13.5955 5.99998 12.963 4.47301 11.8372 3.34716C10.7113 2.22132 9.18435 1.58882 7.59216 1.58882C5.99998 1.58882 4.47301 2.22132 3.34716 3.34716C2.22132 4.47301 1.58882 5.99998 1.58882 7.59216C1.58882 9.18435 2.22132 10.7113 3.34716 11.8372C4.47301 12.963 5.99998 13.5955 7.59216 13.5955C9.18435 13.5955 10.7113 12.963 11.8372 11.8372ZM6.84216 8.34216V6.84216H8.34216V11.3422H6.84216V8.34216ZM6.84216 3.84216H8.34216V5.34216H6.84216V3.84216Z"
            fill="#8B83BA"
          />
        </svg>
      </v-col>
    </v-row>
    <div style="text-transform: uppercase; color: #6E6893; font-size: 16px; font-weight: 600;" v-if="item.user.activity.length === 0" class="py-7 mt-3 text-center">
        No records found.
      </div>
      <div v-else>
        <div v-for="(detail, index) in item.user.activity" :key="index">
          <RowDetail :detail="detail" />
        </div>
      </div>
        </div>
      </transition>
    </div>
  </v-main>
</template>
  
  <script>
import RowDetail from "./RowDetail.vue";
import TableRow from "./TableRow.vue";
import { mapMutations } from 'vuex';
export default {
    props: {
        item: Object
    },
    data() {
    return {
      itemCheckboxState: false,
    };
  },
  components: {
    TableRow,
    RowDetail,
  },
  methods: {
  
    ...mapMutations(['toggleItemOpen']),
    

toggleOpenForItem(itemId, event) {
      if (event.target.classList.contains('custom-checkbox')) {
        return; 
      }
      this.toggleItemOpen(itemId);
    },

statusText(text) {
    const statusTexts = {
      Paid: 'Paid on',
      Unpaid: 'Dues on',
      Overdue: 'Dued on'
    };
    return statusTexts[text] || ''; 
  },

  },
  computed: {
  statusColor() {
    const statusColors = {
      active: '#4A4AFF',
      inactive: '#6E6893',
    };
    const userStatus = this.item.user.user_status;
    return statusColors[userStatus] || ''; 
  },
  statusCol() {
    const statusColors = {
      Paid: '#007F00',
      Unpaid: '#965E00',
      Overdue: '#D30000'
    };
    const userStatus = this.item.payment_status;
    return statusColors[userStatus] || ''; 
  },
  statusBg() {
    const statusColors = {
      Paid: '#CDFFCD',
      Unpaid: '#FFECCC',
      Overdue: '#FFE0E0'
    };
    const userStatus = this.item.payment_status;
    return statusColors[userStatus] || ''; 
  },
 
},

};
</script>
  
  <style scoped>

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
  .accordion-fade-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
}
</style>
  